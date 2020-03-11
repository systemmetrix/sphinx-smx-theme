from setuptools import setup
from setuptools import find_packages


setup(
    name='sphinx_smx_theme',
    version='1.0.35',
    author='sakaguchi',
    author_email='sakaguchi@systemmetrix.jp',
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
