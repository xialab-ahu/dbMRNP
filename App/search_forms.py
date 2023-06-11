#最终版本
from flask import Flask, render_template, redirect, url_for, session
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, EqualTo, InputRequired, Email
from App import app


class SearchForm(FlaskForm):
    gene_name = StringField(label="Title:",render_kw={'autocomplete': 'off'})
    journal = StringField(label='Journal:',render_kw={'autocomplete': 'off'})
    cancer_type = StringField(label='Cancer type:',render_kw={'autocomplete': 'off'})
    introductions = TextAreaField(label="Introductions:",render_kw={'autocomplete': 'off'})
    name = StringField(label='Your name:')
    email = StringField(label='Email:', id='eMail', validators=[DataRequired(message='邮箱不能为空'),
                                                                Email(message=u'邮箱格式错误')],
                        render_kw={'autocomplete': 'off',
                                   'placeholder': "Please input email address"})
    institution = TextAreaField(label="Institution:",render_kw={'autocomplete': 'off'})
    submit = SubmitField(label="Submit",render_kw={'type': "submit"})
    reset = SubmitField(label='Reset', id='resetBtn', render_kw={'type': "reset"})



