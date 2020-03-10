from setuptools import setup, find_packages

setup(
    name='sphinx_smx_theme',
    version='1.0.0',
    packages=find_packages(),

    author='Hiroki Hata',
    author_email='hata@systemmetrix.jp',

    package_data={'sphinx_smx_theme': [
        '*',
        'static/*',
    ]},
)
