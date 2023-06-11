import pandas as pd
import numpy as np
import matplotlib
import matplotlib.pyplot as plt
from collections import Counter
from lifelines import KaplanMeierFitter, CoxPHFitter
from lifelines.statistics import logrank_test, multivariate_logrank_test
from lifelines.plotting import add_at_risk_counts
import datetime
import os
import gseapy as gp
from gseapy.plot import barplot, dotplot

# os.chdir(r"/www/wwwroot/RadiationDB/App/")
os.chdir(r"/data4/wangchen/Rshiny/web/App/")
# os.chdir("D:\\dbCRAF\\App\\")
plt.rcParams['axes.unicode_minus'] = False
from matplotlib import rcParams

config = {
    "font.family": 'Times New Roman',
    "font.size": 20,
}
rcParams.update(config)
fig = plt.figure(dpi=800, figsize=(24, 8))
import warnings

warnings.filterwarnings("ignore")
matplotlib.use('Agg')

from App import app, db
from flask import render_template, flash, redirect, request, url_for, session, jsonify
# from .submit_forms import RegisterForm
from App.submit_forms import SubmitForm
import json
from App.models import Final
from sqlalchemy import or_, and_, text

from flask_mail import Mail, Message

mail = Mail(app)
TEMPLATES_AUTO_RELOAD = True
SEND_FILE_MAX_AGE_DEFAULT = 0

# recipient_mail = '3532685919@qq.com'
recipient_mail='xialab@aliyun.com'


@app.route('/')
def home():
    return render_template("home.html")


@app.route('/dataMatrix')
def dataMatrix():
    return render_template("dataMatrix.html")


@app.route('/analysis')
def analysis():
    return render_template("Analysis.html")


@app.route('/cloudChart')
def cloudChart():
    return render_template("multiCloudChart.html")


@app.route('/survival')
def survival():
    return render_template("Survival.html")


@app.route('/enrichment')
def enrichment():
    return render_template("enrichment.html")


@app.route('/association')
def association():
    return render_template("association.html")


@app.route('/download')
def download():
    return render_template("download.html")


@app.route('/statistics')
def statistics():
    return render_template("statistics.html")


@app.route('/help')
def help():
    return render_template("help.html")


@app.route('/searchAll')  # /order_search/<Order>
def order_search(rsid):
    content = Final.query.filter(Final.rsid == rsid).with_entities(Final.trait, Final.rsid, Final.chr_exposure,
                                                                     Final.pos_exposure, Final.effect_allele,
                                                                     Final.other_allele,
                                                                     Final.beta, Final.se,
                                                                     Final.pval, Final.samplesize).all()
    content = list(content[0])
    return render_template("order_search.html", trait=content[0], rsid=content[1], chr_exposure=content[2],
                           pos_exposure=content[3],
                           effect_allele=content[4],
                           other_allele=content[5],
                           beta=content[6],
                           se=content[7],
                           pval=content[8],
                           samplesize=content[9])


@app.route('/contact')
def contact():
    return render_template("http://www.xialab.info/")


@app.route("/submission", methods=["GET", "POST"])
def submission():
    form = SubmitForm()
    if form.validate_on_submit():
        title = form.title.data
        journal = form.journal.data
        cancer_type = form.cancer_type.data
        regulatory_factor = form.regulatory_factor.data
        name = form.name.data
        email = form.email.data
        institution = form.institution.data
        introductions = form.introductions.data
        body_text = "laiziyouxianghaowei" + email + "?" + name + "yonghutijiaodexinxi\n" \
                    + "title:" + title + "\n" \
                    + "journal:" + journal + "\n" \
                    + "cancer type:" + cancer_type + "\n" \
                    + "regulatory factor:" + regulatory_factor + "\n" \
                    + "introductions:" + introductions + "\n" \
                    + "institution:" + institution + "\n"
        message = Message(subject=title + journal + cancer_type, recipients=[recipient_mail], body=body_text)
        try:
            mail.send(message)
            message = "hello %s, data successfully submitted! Thank you." % name
            return redirect(url_for("submit_success"))
        except Exception as e:
            return redirect(url_for("submit_fail"))
        else:
            return redirect(url_for("submit_fail"))
    else:
        form.title.data = ''
        form.journal.data = ''
        form.cancer_type.data = ''
        form.regulatory_factor.data = ''
        form.introductions.data = ''
        form.name.data = ''
        form.email.data = ''
        form.institution.data = ''
        return render_template("submission.html", form=form)


@app.route("/submit_success")
def submit_success():
    return render_template("submit_success.html")


@app.route("/submit_fail")
def submit_fail():
    return render_template("submit_fail.html")



@app.route("/search")
def search():
    return render_template("multiSearch2.html")


@app.route("/searchCategory", methods=["GET", "POST"])
def searchCategory():
    data = request.form;
    categories = data.getlist("categories[]");
    categories = list(set(categories));
    if categories == ["All"] or len(categories) == 0 or categories == 'All':
        categories = ['Adenoid cystic carcinoma', 'Breast Neoplasms', 'Cholangiocarcinoma', 'Chordoma',
                      'Craniopharyngioma', 'Glioma', 'Head and Neck Neoplasms', 'Intestinal Neoplasms',
                      'Kidney Neoplasms', 'Leukemia', 'Liver Neoplasms', 'Lung Neoplasms', 'Lymphoma',
                      'Melanoma', 'Meningeal Neoplasms', 'Mesothelioma', 'Multiple Myeloma', 'Neuroblastoma',
                      'Neuroendocrine Tumors', 'Ovarian Neoplasms',
                      'Pancreatic Neoplasms', 'Prostatic Neoplasms', 'Sarcoma', 'Skin Neoplasms', 'Stomach Neoplasms',
                      'Thymus Neoplasms',
                      'Urinary Bladder Neoplasms', 'Uterine Neoplasms', 'Vulvar Neoplasms', 'Pancancer']
    type1 = data.getlist("type[]");
    type1 = list(set(type1));
    if type1 == ['All'] or type1 == "All" or len(type1) == 0:
        type1 = ['Protein-coding gene', 'miRNA', 'LncRNA', 'CircRNA', 'Pseudogene', 'Protein', 'Radiosensitizer']
    GeneList = []
    ProteinList = []
    RadiosensitizerList = []
    for i in type1:
        if i == "Protein":
            i == 'Protein expression'
            ProteinList.append(i)
        elif i == "Radiosensitizer":
            RadiosensitizerList.append(i)
        elif i == "LncRNA":
            GeneList.append("LncRNA expression")
        elif i == "miRNA":
            GeneList.append("miRNA expression")
        elif i == "CircRNA":
            GeneList.append("CircRNA expression")
        elif i == "Protein-coding gene":
            GeneList.append("Protein-coding gene expression")
            GeneList.append("Protein-coding gene variation")
            GeneList.append("Protein-coding gene methylation")
        elif i == 'Pseudogene':
            GeneList.append('Pseudogene expression')
    Gene_info = []
    Protein_info = []
    Radiosensitizer_info = []
    if len(GeneList) > 0:
        Gene_info = Final.query.filter(Final.Cancer_type.in_(categories), Final.Factor_source == "Prediction",
                                       Final.Factor_type == 'Gene',
                                       Final.Factor_regulation_type.in_(GeneList)).with_entities(Final.Order,
                                                                                                 Final.Factor,
                                                                                                 Final.Factor_regulation_type,
                                                                                                 Final.Cancer_type,
                                                                                                 Final.Potential_type,
                                                                                                 Final.Radiation_type,
                                                                                                 Final.PMID).all()
    if len(ProteinList) > 0:
        Protein_info = Final.query.filter(Final.Cancer_type.in_(categories), Final.Factor_source == "Prediction",
                                          Final.Factor_type.in_(['protein', 'Protein'])).with_entities(Final.Order,
                                                                                                       Final.Factor,
                                                                                                       Final.Factor_regulation_type,
                                                                                                       Final.Cancer_type,
                                                                                                       Final.Potential_type,
                                                                                                       Final.Radiation_type,
                                                                                                       Final.PMID).all()
    if len(RadiosensitizerList) > 0:
        Radiosensitizer_info = Final.query.filter(Final.Cancer_type.in_(categories),
                                                  Final.Factor_source == "Prediction",
                                                  Final.Factor_type == 'Radiosensitizer').with_entities(Final.Order,
                                                                                                        Final.Factor,
                                                                                                        Final.Factor_regulation_type,
                                                                                                        Final.Cancer_type,
                                                                                                        Final.Potential_type,
                                                                                                        Final.Radiation_type,
                                                                                                        Final.PMID).all()
    if (len(GeneList) + len(ProteinList) + len(RadiosensitizerList) == 0):
        return {"data": []}
    rows = []
    row = {}
    fields = ["Order", "Factor", "Factor_type", "Cancer_type", "Potential_type", "Radiation_type", "PMID", ]
    for line in Gene_info:
        row = {}
        for i, k in enumerate(fields):
            row[k] = line[i]
        rows.append(row)
    for line in Protein_info:
        row = {}
        for i, k in enumerate(fields):
            row[k] = line[i]
        rows.append(row)
    for line in Radiosensitizer_info:
        row = {}
        for i, k in enumerate(fields):
            row[k] = line[i]
        rows.append(row)
    return {"data": rows}


@app.route("/searchExperiment", methods=["GET", "POST"])
def searchExperiment():
    data = request.form;
    categories = data.getlist("categories[]");
    categories = list(set(categories));
    if categories == ["All"] or len(categories) == 0 or categories == 'All':
        categories = ['Adenoid cystic carcinoma', 'Breast Neoplasms', 'Cholangiocarcinoma', 'Chordoma',
                      'Craniopharyngioma', 'Glioma', 'Head and Neck Neoplasms', 'Intestinal Neoplasms',
                      'Kidney Neoplasms', 'Leukemia', 'Liver Neoplasms', 'Lung Neoplasms', 'Lymphoma',
                      'Melanoma', 'Meningeal Neoplasms', 'Mesothelioma', 'Multiple Myeloma', 'Neuroblastoma',
                      'Neuroendocrine Tumors', 'Ovarian Neoplasms',
                      'Pancreatic Neoplasms', 'Prostatic Neoplasms', 'Sarcoma', 'Skin Neoplasms', 'Stomach Neoplasms',
                      'Thymus Neoplasms',
                      'Urinary Bladder Neoplasms', 'Uterine Neoplasms', 'Vulvar Neoplasms', 'Pancancer']
    type1 = data.getlist("type[]");
    type1 = list(set(type1));
    if type1 == ['All'] or type1 == "All" or len(type1) == 0:
        type1 = ['Protein-coding gene', 'miRNA', 'LncRNA', 'CircRNA', 'Pseudogene', 'Protein', 'Radiosensitizer']
    GeneList = []
    ProteinList = []
    RadiosensitizerList = []
    for i in type1:
        if i == "Protein":
            i == 'Protein expression'
            ProteinList.append(i)
        elif i == "Radiosensitizer":
            RadiosensitizerList.append(i)
        elif i == "LncRNA":
            GeneList.append("LncRNA expression")
        elif i == "miRNA":
            GeneList.append("miRNA expression")
        elif i == "CircRNA":
            GeneList.append("CircRNA expression")
        elif i == "Protein-coding gene":
            GeneList.append("Protein-coding gene expression")
            GeneList.append("Protein-coding gene variation")
            GeneList.append("Protein-coding gene methylation")
        elif i == 'Pseudogene':
            GeneList.append('Pseudogene expression')
    Gene_info = []
    Protein_info = []
    Radiosensitizer_info = []
    if len(GeneList) > 0:
        Gene_info = Final.query.filter(Final.Cancer_type.in_(categories), Final.Factor_source == "Experiment",
                                       Final.Factor_type == 'Gene',
                                       Final.Factor_regulation_type.in_(GeneList)).with_entities(Final.Order,
                                                                                                 Final.Factor,
                                                                                                 Final.Factor_regulation_type,
                                                                                                 Final.Sensitivity_up,
                                                                                                 Final.Resistance_up,
                                                                                                 Final.Cancer_type,
                                                                                                 Final.Radiation_type,
                                                                                                 Final.PMID).all()
    if len(ProteinList) > 0:
        Protein_info = Final.query.filter(Final.Cancer_type.in_(categories), Final.Factor_source == "Experiment",
                                          Final.Factor_type.in_(['protein', 'Protein'])).with_entities(Final.Order,
                                                                                                       Final.Factor,
                                                                                                       Final.Factor_regulation_type,
                                                                                                       Final.Sensitivity_up,
                                                                                                       Final.Resistance_up,
                                                                                                       Final.Cancer_type,
                                                                                                       Final.Radiation_type,
                                                                                                       Final.PMID).all()
    if len(RadiosensitizerList) > 0:
        Radiosensitizer_info = Final.query.filter(Final.Cancer_type.in_(categories),
                                                  Final.Factor_source == "Experiment",
                                                  Final.Factor_type == 'Radiosensitizer').with_entities(Final.Order,
                                                                                                        Final.Factor,
                                                                                                        Final.Factor_regulation_type,
                                                                                                        Final.Sensitivity_up,
                                                                                                        Final.Resistance_up,
                                                                                                        Final.Cancer_type,
                                                                                                        Final.Radiation_type,
                                                                                                        Final.PMID).all()
    if (len(GeneList) + len(ProteinList) + len(RadiosensitizerList) == 0):
        return {"data": []}
    rows = []
    row = {}
    fields = ["Order", "Factor", "Factor_type", "Sensitivity", "Resistance", "Cancer_type", "Radiation_type", "PMID", ]
    for line in Gene_info:
        row = {}
        for i, k in enumerate(fields):
            row[k] = line[i]
        rows.append(row)
    for line in Protein_info:
        row = {}
        for i, k in enumerate(fields):
            row[k] = line[i]
        rows.append(row)
    for line in Radiosensitizer_info:
        row = {}
        for i, k in enumerate(fields):
            row[k] = line[i]
        rows.append(row)
    return {"data": rows}


@app.route("/analysis1", methods=["GET", "POST"])
def analysis1():
    data = request.form;
    categories = data.getlist("ct[]");
    categories = list(set(categories));
    categories = [i.strip().replace("_", " ") for i in categories]
    type1 = data.getlist("tt[]");
    type1 = list(set(type1));
    type1 = [i.strip().replace("_", " ") for i in type1]
    geneList = []
    proteinList = []
    RadiosensitizerList = []
    for i in type1:
        if i == 'Protein':
            i = 'Protein expression'
            proteinList.append(i)
        elif i == 'Radiosensitizer':
            RadiosensitizerList.append(i)
        else:
            if i == 'Protein-coding gene':
                geneList.append('Protein-coding gene expression')
                geneList.append('Protein-coding gene methylation')
                geneList.append('Protein-coding gene variation')
            else:
                if i == 'miRNA':
                    i = 'miRNA expression'
                elif i == 'LncRNA':
                    i = 'LncRNA expression'
                elif i == 'Pseudogene':
                    i = 'Pseudogene expression'
                elif i == 'CircRNA':
                    i = 'CircRNA expression'
                geneList.append(i)
    factor_list1 = []
    factor_list2 = []
    factor_list3 = []
    if len(geneList) > 0:
        factor_list1 = list(Final.query.filter(Final.Cancer_type.in_(categories), Final.Factor_type.in_(["Gene"]),
                                               Final.Factor_regulation_type.in_(geneList)).with_entities(
            Final.Factor).all())
    if len(proteinList) > 0:
        factor_list2 = list(Final.query.filter(Final.Cancer_type.in_(categories), Final.Factor_type.in_(["Protein"]),
                                               Final.Factor_regulation_type.in_(proteinList)).with_entities(
            Final.Factor).all())
    if len(RadiosensitizerList) > 0:
        factor_list3 = list(
            Final.query.filter(Final.Cancer_type.in_(categories), Final.Factor_type.in_(["Radiosensitizer"]),
                               Final.Factor_regulation_type.in_(RadiosensitizerList)).with_entities(Final.Factor).all())
    factor_list = factor_list1 + factor_list2 + factor_list3
    factor_list = dict(Counter(factor_list))
    factor_list = [{'name': k[0], 'value': v} for k, v in factor_list.items()]
    if (len(factor_list) == 0):
        e = "No available data !"
        return {"error": e}
    return {"data": factor_list}


@app.route("/analysis2", methods=["GET", "POST"])
def analysis2():
    data = request.form;
    categories = data.getlist("ct[]");
    categories = list(set(categories));
    categories = [i.strip().replace("_", " ") for i in categories]
    type1 = data.getlist("tt[]");
    type1 = list(set(type1));
    type1 = [i.strip().replace("_", " ") for i in type1]
    geneList = []
    proteinList = []
    RadiosensitizerList = []
    for i in type1:
        if i == 'Protein':
            i = 'Protein expression'
            proteinList.append(i)
        elif i == 'Radiosensitizer':
            RadiosensitizerList.append(i)
        else:
            if i == 'Protein-coding gene':
                geneList.append('Protein-coding gene expression')
                geneList.append('Protein-coding gene methylation')
                geneList.append('Protein-coding gene variation')
            else:
                if i == 'miRNA':
                    i = 'miRNA expression'
                elif i == 'LncRNA':
                    i = 'LncRNA expression'
                elif i == 'Pseudogene':
                    i = 'Pseudogene expression'
                elif i == 'CircRNA':
                    i = 'CircRNA expression'
                geneList.append(i)
    factor_list1 = []
    factor_list2 = []
    factor_list3 = []
    if len(geneList) > 0:
        factor_list1 = list(Final.query.filter(Final.Factor_source == 'Prediction', Final.Cancer_type.in_(categories),
                                               Final.Factor_type.in_(["Gene"]),
                                               Final.Factor_regulation_type.in_(geneList)).with_entities(
            Final.Factor).all())
    if len(proteinList) > 0:
        factor_list2 = list(Final.query.filter(Final.Factor_source == 'Prediction', Final.Cancer_type.in_(categories),
                                               Final.Factor_type.in_(["Protein"]),
                                               Final.Factor_regulation_type.in_(proteinList)).with_entities(
            Final.Factor).all())
    if len(RadiosensitizerList) > 0:
        factor_list3 = list(
            Final.query.filter(Final.Factor_source == 'Prediction', Final.Cancer_type.in_(categories),
                               Final.Factor_type.in_(["Radiosensitizer"]),
                               Final.Factor_regulation_type.in_(RadiosensitizerList)).with_entities(Final.Factor).all())
    factor_list = factor_list1 + factor_list2 + factor_list3
    factor_list = dict(Counter(factor_list))
    factor_list = [{'name': k[0], 'value': v} for k, v in factor_list.items()]
    if (len(factor_list) == 0):
        e = "No available data !"
        return {"error": e}
    return {"data": factor_list}


@app.route("/analysis3", methods=["GET", "POST"])
def analysis3():
    data = request.form;
    categories = data.getlist("ct[]");
    categories = list(set(categories));
    categories = [i.strip().replace("_", " ") for i in categories]
    type1 = data.getlist("tt[]");
    type1 = list(set(type1));
    type1 = [i.strip().replace("_", " ") for i in type1]
    geneList = []
    proteinList = []
    RadiosensitizerList = []
    for i in type1:
        if i == 'Protein':
            i = 'Protein expression'
            proteinList.append(i)
        elif i == 'Radiosensitizer':
            RadiosensitizerList.append(i)
        else:
            if i == 'Protein-coding gene':
                geneList.append('Protein-coding gene expression')
                geneList.append('Protein-coding gene methylation')
                geneList.append('Protein-coding gene variation')
            else:
                if i == 'miRNA':
                    i = 'miRNA expression'
                elif i == 'LncRNA':
                    i = 'LncRNA expression'
                elif i == 'Pseudogene':
                    i = 'Pseudogene expression'
                elif i == 'CircRNA':
                    i = 'CircRNA expression'
                geneList.append(i)
    factor_list1 = []
    factor_list2 = []
    factor_list3 = []
    if len(geneList) > 0:
        factor_list1 = list(Final.query.filter(Final.Factor_source == 'Experiment', Final.Cancer_type.in_(categories),
                                               Final.Factor_type.in_(["Gene"]),
                                               Final.Factor_regulation_type.in_(geneList)).with_entities(
            Final.Factor).all())
    if len(proteinList) > 0:
        factor_list2 = list(Final.query.filter(Final.Factor_source == 'Experiment', Final.Cancer_type.in_(categories),
                                               Final.Factor_type.in_(["Protein"]),
                                               Final.Factor_regulation_type.in_(proteinList)).with_entities(
            Final.Factor).all())
    if len(RadiosensitizerList) > 0:
        factor_list3 = list(
            Final.query.filter(Final.Factor_source == 'Experiment', Final.Cancer_type.in_(categories),
                               Final.Factor_type.in_(["Radiosensitizer"]),
                               Final.Factor_regulation_type.in_(RadiosensitizerList)).with_entities(Final.Factor).all())
    factor_list = factor_list1 + factor_list2 + factor_list3
    factor_list = dict(Counter(factor_list))
    factor_list = [{'name': k[0], 'value': v} for k, v in factor_list.items()]
    if (len(factor_list) == 0):
        e = "No available data !"
        return {"error": e}
    return {"data": factor_list}


@app.route("/searchAll", methods=["GET", "POST"])
def searchAll():
    data = request.form;
    categories = data.getlist("chr_exposure[]");
    categories = list(set(categories));
    if categories == ["All"] or len(categories) == 0 or categories == 'All':
        categories = ['1', '4', '8', '9',
                      '10', '11', '20', '2',
                      '3', '5', '15', '17', '19']
    type1 = data.getlist("effect_allele[]");
    type1 = list(set(type1));
    if type1 == ['All'] or type1 == "All" or len(type1) == 0:
        type1 = ['A', 'T', 'C', 'G']
    AList = []
    TList = []
    CList = []
    GList = []
    for i in type1:
        if i == "A":
            AList.append(i)
        elif i == "T":
            TList.append(i)
        elif i == "C":
            CList.append(i)
        elif i == "G":
            GList.append(i)
    
    A_info = []
    T_info = []
    C_info = []
    G_info = []
    if len(AList) > 0:
        A_info = Final.query.filter(Final.chr_exposure.in_(categories), Final.effect_allele == 'A',
                                       Final.effect_allele.in_(AList)).with_entities(Final.trait,
                                                                                                 Final.rsid,
                                                                                                 Final.chr_exposure,
                                                                                                 Final.pos_exposure,
                                                                                                 Final.effect_allele,
                                                                                                 Final.other_allele,
                                                                                                 Final.beta,
                                                                                                 Final.se,
                                                                                                 Final.pval,
                                                                                                 Final.samplesize, ).all()
    if len(TList) > 0:
        T_info = Final.query.filter(Final.chr_exposure.in_(categories), Final.effect_allele == 'T',
                                       Final.effect_allele.in_(TList)).with_entities(Final.trait,
                                                                                                 Final.rsid,
                                                                                                 Final.chr_exposure,
                                                                                                 Final.pos_exposure,
                                                                                                 Final.effect_allele,
                                                                                                 Final.other_allele,
                                                                                                 Final.beta,
                                                                                                 Final.se,
                                                                                                 Final.pval,
                                                                                                 Final.samplesize, ).all()
    if len(CList) > 0:
        C_info = Final.query.filter(Final.chr_exposure.in_(categories), Final.effect_allele == 'C',
                                       Final.effect_allele.in_(CList)).with_entities(Final.trait,
                                                                                                 Final.rsid,
                                                                                                 Final.chr_exposure,
                                                                                                 Final.pos_exposure,
                                                                                                 Final.effect_allele,
                                                                                                 Final.other_allele,
                                                                                                 Final.beta,
                                                                                                 Final.se,
                                                                                                 Final.pval,
                                                                                                 Final.samplesize, ).all()
    if len(GList) > 0:
        G_info = Final.query.filter(Final.chr_exposure.in_(categories), Final.effect_allele == 'C',
                                       Final.effect_allele.in_(CList)).with_entities(Final.trait,
                                                                                                 Final.rsid,
                                                                                                 Final.chr_exposure,
                                                                                                 Final.pos_exposure,
                                                                                                 Final.effect_allele,
                                                                                                 Final.other_allele,
                                                                                                 Final.beta,
                                                                                                 Final.se,
                                                                                                 Final.pval,
                                                                                                 Final.samplesize, ).all()
    if (len(AList) + len(TList) + len(CList) + len(GList) == 0):
        return {"data": []}
    rows = []
    row = {}
    fields = ["trait", "rsid", "chr_exposure", "pos_exposure", "effect_allele", "other_allele", "beta",
              "se", "pval", "samplesize"]
    for line in A_info:
        row = {}
        for i, k in enumerate(fields):
            row[k] = line[i]
        rows.append(row)
    for line in T_info:
        row = {}
        for i, k in enumerate(fields):
            row[k] = line[i]
        rows.append(row)
    for line in C_info:
        row = {}
        for i, k in enumerate(fields):
            row[k] = line[i]
        rows.append(row)
    for line in G_info:
        row = {}
        for i, k in enumerate(fields):
            row[k] = line[i]
        rows.append(row)
    print("len:", len(row))
    return {"data": rows}


def draw(data, pos, ylabel, TIME, status, groups):
    fig, ax = plt.subplots(figsize=(10, 12))
    i1 = (groups > np.median(groups))
    i2 = (groups < np.median(groups))
    # left_img
    high = KaplanMeierFitter().fit(data[TIME][i1], data[status][i1], label='High expression')
    ax = high.plot_survival_function(ax=ax, censor_styles={'marker': 'o', 'ms': 7}, linewidth=3)
    low = KaplanMeierFitter().fit(data[TIME][i2], data[status][i2], label='Low expression')
    ax = low.plot_survival_function(ax=ax, censor_styles={'marker': '+', 'ms': 7}, linewidth=3)
    p_value = logrank_test(data[TIME][i1], data[TIME][i2], data[status][i1], data[status][i2]).p_value
    p_value = format(p_value, '.3f')
    plt.title(TIME.strip().split('.')[0] + ' : ' + 'p=' + str(p_value), fontsize=30)
    min_value = min(data[TIME]) - 5
    max_value = max(data[TIME]) + 5
    plt.xlim([min_value, max_value])
    plt.xticks(np.linspace(min_value, max_value, 5), fontsize=23)
    plt.yticks([0.00, 0.25, 0.50, 0.75, 1.00], fontsize=23)
    plt.xlabel('Time(days)', fontsize=30)
    plt.ylabel(ylabel, fontsize=30)
    plt.legend(loc='best', frameon=False, fontsize=28)
    add_at_risk_counts(high, low, ax=ax, fontsize=25)
    plt.tight_layout()
    str_time = (datetime.datetime.now()).strftime("%Y%m%d%H%M%S")
    save_png = pos + "_" + str_time + ".png"
    img_path = './static/images/' + save_png
    if os.path.exists(img_path):
        os.remove(img_path)
    plt.savefig(img_path, dpi=800)
    return save_png


@app.route("/survival_data", methods=["GET", "POST"])
def survival_data():
    e = 0
    data = request.form;
    ct = list(data.getlist("ct"))[0].strip().split(",");
    ct = [i.strip().split('-')[-1] for i in ct]
    ft = data.get("ft");
    f = data.get("f");
    if ft == 'mRNA':
        data_Dir = './data/RadiationDB_information/TCGA_mRNA_expression_data.csv'
    else:
        data_Dir = "./data/RadiationDB_information/TCGA_miRNA_expression_data.csv"
    data = pd.read_csv(data_Dir)
    if f not in data.columns:
        e = "no this factor : " + f + " !"
        return {'error': e}
    data = data[data['cancer'].isin(ct)]
    data = data.loc[:, ['cancer', 'OS.status', 'OS.time', 'PFI.status', 'PFI.time', f]]
    data[f] = data[f].fillna(0)
    data = data[-data[f].isin([0])]
    groups = list(data[f])
    if len(groups) == groups.count(0):
        e = 'NA values exist in this factor !'
        return {'error': e}
    if len(groups) == 1:
        e = 'The number of available samples is too small to plot !'
        return {'error': e}
    left_image = draw(data, "OS", "Overall survival", 'OS.time', 'OS.status', groups)
    right_image = draw(data, "PFI", "Progression free survival", 'PFI.time', 'PFI.status', groups)
    return {'left': left_image, "right": right_image}


@app.route("/enrichment_data", methods=["GET", "POST"])
def enrichment_data():
    gene_list = ''
    gene_sets = 'KEGG_2016'
    data = request.form;
    ct = data.get("ct");
    ft = data.get("ft");
    if ft == "protein":
        ft = ["Protein-coding gene expression", "protein-coding gene expression"]
    elif ft == "miRNA":
        ft = ['miRNA expression']
    else:
        ft = ['LncRNA expression']
    ff = "Gene"
    gene_list = list(
        [i[0] for i in Final.query.filter(Final.Cancer_type == ct, Final.Factor_type == ff,
                                          Final.Factor_regulation_type.in_(ft)).with_entities(Final.Factor).all()])
    if (len(gene_list) == 0):
        e = "No relevant data for this factor !"
        return {'error': e}
    if ft == ["Protein-coding gene expression", "protein-coding gene expression"]:
        gene_list = gene_list
    elif ft == ["LncRNA expression"]:
        RNA_data = pd.read_csv("./data/RadiationDB_information/LncRNA_Target_annotation.txt", sep="\t")
        RNA_data = RNA_data.loc[:, ['LncRNA_symbol', 'Target_official_symbol']]
        gene_list = list(RNA_data[RNA_data['LncRNA_symbol'].isin(gene_list)]['Target_official_symbol'])
    else:
        if ft == ["miRNA expression"]:
            RNA_data = pd.read_csv("./data/RadiationDB_information/miRNA_Target_annotation.csv")
            RNA_data = RNA_data.loc[:, ['miRNA', 'Target gene']]
            gene_list = list(RNA_data[RNA_data['miRNA'].isin(gene_list)]['Target gene'])
        else:
            e = "An error occurred, please try again!"
            return {'error': e}
    if (len(gene_list) == 0):
        e = "Data without relevant factors !"
        return {'error': e}
    try:
        #
        enr = gp.enrichr(gene_list=list(set(gene_list)),
                         gene_sets=gene_sets,
                         organism='Human',
                         description='kegg',
                         outdir='./data/enrichr',
                         top_term=20,
                         cutoff=0.5
                         )
        str_time = (datetime.datetime.now()).strftime("%Y%m%d%H%M%S")
        save_png = "KEGG_2016" + "_" + str_time + ".png"
        img_path = "./static/images/" + save_png
        if os.path.exists(img_path):
            os.remove(img_path)
        dotplot(enr.results.loc[enr.results["Gene_set"] == "KEGG_2016",], title='KEGG Top20 Pathway', cmap='viridis_r',
                top_term=20, legend="r",
                ofname=img_path,
                )
        return {"image": save_png}
    except:
        e = 'Error getting the Enrichr libraries!'
        return {'error': e}



@app.route("/downloading", methods=["GET", "POST"])
def downloading():
    datas = request.form;
    node = datas.get("node");
    node=eval(node)
    value = datas.get("value");
    value=eval(value)
    msg=[]
    msg.append(node)
    msg.append(value)
    s1 = """
    <!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <title>dbCRAF</title>
    <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>
<div class='panel panel-default'>
    <div class='panel-body  panel-table'>
        <h3 align='center'>Network Association Visualization</h3>
        <hr/>
        <div id='echarts_img' style='height:830px'></div>
    </div>
</div>
<script src='https://code.jquery.com/jquery-1.12.4.js'></script>
<script type='text/javascript' src='https://cdn.staticfile.org/echarts/4.3.0/echarts.min.js'></script>
<script>
var msg="""
    s2=""";
    var categories = [];
    for (var i = 0; i < msg[0].length; i++) {
        categories[i] = {
            name: 'score' + i
        }
    }
    var myChart = echarts.init(document.getElementById('echarts_img'));
    myChart.setOption({
        tooltip: {},
        toolbox: {
            show: true,
            feature: {
                restore: {show: true},
                saveAsImage: {show: true}
            },
        },
        animationDuration: 1000,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                type: 'graph',
                name: 'Gene',
                layout: 'force',
                data: function () {
                    var arr = [];
                    for (var j = 0; j < msg[1].length; j++) {
                        arr.push({
                            itemStyle: null,
                            category: msg[1][j][1],
                            name: msg[1][j][0],
                            value: msg[1][j][1],
                            symbolSize: msg[1][j][2],
                            x: null,
                            y: null,
                            label: {
                                show: true,
                                fontSize: msg[1][j][2],
                            }

                        });
                    }
                    return arr;
                }(),
                links: function () {
                    var arr = [];
                    for (var i = 0; i < msg[0].length; i++) {
                        arr.push({
                            source: msg[0][i][0],
                            target: msg[0][i][1]
                        });
                    }
                    return arr;
                }(),
                categories: categories,
                roam: true,
                draggable: true,
                focusNodeAdjacency: true,
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.3)'
                    }
                },
                label: {
                    position: 'inside',
                    fontWeight: 'bold',
                    fontSize: 20
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0,
                    width: 2
                },
                emphasis: {
                    lineStyle: {
                        width: 10
                    }
                },
                force: {
                    repulsion: 700
                }
            }
        ]
    });
    window.onresize = myChart.resize;
</script>
</body>
</html>
    """
    name=''
    str_time = (datetime.datetime.now() + datetime.timedelta(minutes=5)).strftime("%Y%m%d%H%M%S")
    name = "Network" + "_" + str_time + ".html"
    img_path = "./static/css/" + name
    if os.path.exists(img_path):
        os.remove(img_path)
    with open(img_path,'w') as f:
        f.writelines(s1)
        f.write('[[')
        for i in msg[0]:
            f.write('["'+i[0]+'"'+',"'+i[1]+'"],')
        f.write("],[")
        for i in msg[1]:
            f.write('["'+i[0]+'",'+str(i[1])+','+str(i[2])+'],')
        f.write(']]')
        f.writelines(s2)
    return {"status":"1",'name':name}


@app.route("/association_data1", methods=["GET", "POST"])
def association_data1():
    msg = []
    node = []
    values = []
    ppippi=[]
    geneppigeneppi=[]
    datas = request.form;
    ct = datas.get("ct");
    ct = ct.replace('_', ' ')
    ct = ct.replace('-', ',')
    ct = [ct]
    tt = datas.get("tt");
    geneppi = pd.DataFrame([])
    if tt == 'Protein-coding gene':
        tt = ["Protein-coding gene expression", "Protein-coding gene methylation", "Protein-coding gene variation",
              "protein-coding gene expression", "protein-coding gene methylation", "protein-coding gene variation"]
        ppi = list(Final.query.filter(Final.Cancer_type.in_(ct), Final.Factor_regulation_type.in_(tt)).with_entities(
            Final.Factor).all())
        ppi = [i[0] for i in ppi]
    elif tt == 'Protein':
        tt = ['Protein']
        ppi = list(
            Final.query.filter(Final.Cancer_type.in_(ct), Final.Factor_type.in_(tt)).with_entities(Final.Factor).all())
        ppi = [i[0] for i in ppi]
    elif tt == 'miRNA-target gene':
        tt = ['miRNA expression']
        ppi = list(Final.query.filter(Final.Cancer_type.in_(ct), Final.Factor_regulation_type.in_(tt)).with_entities(
            Final.Factor).all())
        ppi = [i[0] for i in ppi]
        geneppi = pd.read_csv("./data/RadiationDB_information/miRNA_Target_annotation.csv")
        geneppi = pd.DataFrame(geneppi)
        geneppi = geneppi.loc[:, ['miRNA', 'Target gene']]
        geneppi.columns = ['non_encoding', 'target_gene']
        geneppi = geneppi[geneppi['non_encoding'].isin(ppi)]
        ppi = list(geneppi['non_encoding'])
        non_encoding_dict = dict(Counter(ppi))
        if (len(non_encoding_dict) > 30):
            ppi = [i[0] for i in sorted(non_encoding_dict.items(), key=lambda x: x[1], reverse=True)][:30]
            geneppi = geneppi[geneppi['non_encoding'].isin(ppi)]
        ppippi = ppi
        geneppigeneppi = geneppi
        ppi = list(geneppi[geneppi['non_encoding'].isin(ppi)]['target_gene'])
    elif tt == 'LncRNA-target gene':
        tt = ['LncRNA expression']
        ppi = list(Final.query.filter(Final.Cancer_type.in_(ct), Final.Factor_regulation_type.in_(tt)).with_entities(
            Final.Factor).all())
        ppi = [i[0] for i in ppi]
        geneppi = pd.read_csv("./data/RadiationDB_information/LncRNA_Target_annotation.txt", sep="\t")
        geneppi = pd.DataFrame(geneppi)
        geneppi = geneppi.loc[:, ['LncRNA_symbol', 'Target_official_symbol']]
        geneppi.columns = ['non_encoding', 'target_gene']
        geneppi = geneppi[geneppi['non_encoding'].isin(ppi)]
        ppi = list(geneppi['non_encoding'])
        non_encoding_dict = dict(Counter(ppi))
        if (len(non_encoding_dict) > 30):
            ppi = [i[0] for i in sorted(non_encoding_dict.items(), key=lambda x: x[1], reverse=True)][:30]
            geneppi = geneppi[geneppi['non_encoding'].isin(ppi)]
        ppippi = ppi
        geneppigeneppi = geneppi
        ppi = list(geneppi[geneppi['non_encoding'].isin(ppi)]['target_gene'])
    elif tt == 'CircRNA-target gene':
        tt = ['CircRNA expression']
        ppi = list(Final.query.filter(Final.Cancer_type.in_(ct), Final.Factor_regulation_type.in_(tt)).with_entities(
            Final.Factor).all())
        ppi = [i[0] for i in ppi]
        geneppi = pd.read_csv("./data/RadiationDB_information/CircRNA_Target_annotation.csv")
        geneppi = pd.DataFrame(geneppi)
        geneppi = geneppi.loc[:, ['circbase_ID', 'Target_Mirbase_ID']]
        geneppi.columns = ['non_encoding', 'target_gene']
        geneppi = geneppi[geneppi['non_encoding'].isin(ppi)]
        ppi = list(geneppi['non_encoding'])
        non_encoding_dict = dict(Counter(ppi))
        if (len(non_encoding_dict) > 30):
            ppi = [i[0] for i in sorted(non_encoding_dict.items(), key=lambda x: x[1], reverse=True)][:30]
            geneppi = geneppi[geneppi['non_encoding'].isin(ppi)]
        ppippi = ppi
        geneppigeneppi = geneppi
        ppi = list(geneppi[geneppi['non_encoding'].isin(ppi)]['target_gene'])
    else:
        tt = ['Radiosensitizer']
        ppi = list(Final.query.filter(Final.Cancer_type.in_(ct), Final.Factor_regulation_type.in_(tt)).with_entities(
            Final.Factor).all())
        ppi = [i[0] for i in ppi]
        geneppi = pd.read_csv("./data/RadiationDB_information/Radiosensitizer_Target_association.txt", sep="\t")
        ppi = list(geneppi[geneppi['Chemical_name'].isin(ppi)]['Target_gene'])
    get_ppi = pd.read_csv("./data/PPI_information_all.txt", sep="\t")
    get_ppi = get_ppi[get_ppi['protein1_name'].isin(ppi)]
    get_ppi = get_ppi[get_ppi['protein2_name'].isin(ppi)]
    a = []
    get_ppi.index = np.arange(len(get_ppi))
    all_node = list(get_ppi['protein1_name']) + list(get_ppi['protein2_name'])
    all_node_dict = dict(Counter(all_node))
    if (len(all_node_dict)) > 30:
        new_node = [i[0] for i in sorted(all_node_dict.items(), key=lambda x: x[1], reverse=True)][:30]
        get_ppi = get_ppi[get_ppi['protein1_name'].isin(new_node)]
        get_ppi = get_ppi[get_ppi['protein2_name'].isin(new_node)]
        get_ppi.index = np.arange(len(get_ppi))
        all_node = list(get_ppi['protein1_name']) + list(get_ppi['protein2_name'])
        all_node_dict = dict(Counter(all_node))
    for i in list(set(all_node)):
        value = all_node_dict[i]
        if value > 200:
            va = [i, value, 20]
        else:
            va = [i, value, 15]
        values.append(va)
    for i in np.arange(len(get_ppi)):
        node1 = get_ppi.iloc[i]["protein1_name"]
        node2 = get_ppi.iloc[i]["protein2_name"]
        if [node1, node2] not in node and [node2, node1] not in node:
            node.append([node1, node2])
    for i in np.arange(len(geneppigeneppi)):
        node1 = geneppigeneppi.iloc[i]["non_encoding"]
        node2 = geneppigeneppi.iloc[i]["target_gene"]
        if node2 in all_node:
            if [node1, node2] not in node and [node2, node1] not in node:
                node.append([node1, node2])
            value = non_encoding_dict[node1]
            if value > 200:
                va = [node1, value, 20]
            else:
                va = [node1, value, 15]
            if va not in values:
                values.append(va)
    msg.append(node)
    msg.append(values)
    if (len(node) == 0):
        e = "No available data !"
        return {"error": e}
    return {"data": msg}


