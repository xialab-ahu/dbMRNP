#最终版本
from flask import Flask, render_template, redirect, url_for, session
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, TextAreaField
from wtforms.validators import DataRequired, EqualTo, InputRequired, Email


class SubmitForm(FlaskForm):
    title = StringField(label="Title:", render_kw={'autocomplete': 'off'})
    journal = StringField(label='Journal:', render_kw={'autocomplete': 'off'})
    cancer_type = StringField(label='Cancer type*:', validators=[DataRequired(message='癌症类型不能为空')],
                              render_kw={'autocomplete': 'off'})
    regulatory_factor = StringField(label='Regulatory factor*:', validators=[DataRequired(message='调控因子不能为空')],
                                    render_kw={'autocomplete': 'off'})
    introductions = TextAreaField(label="Introductions:", render_kw={
        'autocomplete': 'off'})
    name = StringField(label='Your name:', render_kw={'autocomplete': 'off'})
    email = StringField(label='Email*:', id='eMail', validators=[DataRequired(message='邮箱不能为空'),
                                                                 Email(message=u'邮箱格式错误')],
                        render_kw={'autocomplete': 'off',
                                   }
                        )
    institution = TextAreaField(label="Institution*:", validators=[DataRequired(message='机构不能为空')],
                                render_kw={'autocomplete': 'off', 'html': ''})
    submit = SubmitField(label="Submit", render_kw={'type': "submit", "οnclick": "alert('成功')"})
    reset = SubmitField(label='Reset', id='resetBtn', render_kw={'type': "reset"})
