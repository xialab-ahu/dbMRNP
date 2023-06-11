#最终版�?
from App import db
from datetime import datetime

class Final(db.Model):
    __tablename__ = 'phenotype' # final_data
    trait = db.Column(db.String(255)) # primary_key=True
    rsid=db.Column(db.String(255), primary_key=True)
    chr_exposure = db.Column(db.String(255))
    pos_exposure = db.Column(db.String(255))
    effect_allele = db.Column(db.String(255))
    other_allele = db.Column(db.String(255))
    beta = db.Column(db.String(255))
    se = db.Column(db.String(255))
    pval = db.Column(db.String(255))
    samplesize = db.Column(db.String(255))
    # Cancer_specific_type = db.Column(db.String(255))
    # Sensitivity_up = db.Column(db.String(255))
    # Resistance_up = db.Column(db.String(255))
    # Potential_type = db.Column(db.String(255))
    # Subcellular_localization = db.Column(db.String(255))
    # Cell_line = db.Column(db.String(1000))
    # Data_Source = db.Column(db.String(255))
    # Data_time_range = db.Column(db.String(128))
    # Data_number = db.Column(db.String(1000))
    # Endpoint = db.Column(db.String(3000))
    # Key_sentence = db.Column(db.String(3000))
    # Radiation_type = db.Column(db.String(255))
    # Species = db.Column(db.String(255))
    # Journal = db.Column(db.String(255))
    # Date = db.Column(db.DateTime(4))
    # Author = db.Column(db.String(3000))
    # Abstract = db.Column(db.String(3000))
    def __repr__(self):
        return '<rsid {}>'.format(self.rsid)

