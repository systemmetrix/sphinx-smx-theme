from setuptools import find_packages
from setuptools import setup

setup(
    name='sphinx_smx_theme',
    version='1.0.36',
    author='hata',
    author_email='hata@systemmetrix.jp',
    url='www.systemmetrix.jp',
    zip_safe=False,
    include_package_data=True,
    packages=find_packages(),
    install_requires=[],
    tests_require=[],
    setup_requires=[],
    entry_points={
        'sphinx.html_themes': [
            'sphinx_smx_theme = sphinx_smx_theme',
        ]
    },
)
