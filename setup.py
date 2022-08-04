from setuptools import setup, find_packages

with open('requirements.txt') as f:
    install_requires = f.read().strip().split('\n')

# get version from __version__ variable in erpnext_fiscal_year_based_date_related_fields/__init__.py
from frappe_better_select_control import __version__ as version

setup(
    name='frappe_better_select_control',
    version=version,
    description='Frappe select control that supports options group.',
    author='Ameen Ahmed (Level Up)',
    author_email='kid1194@gmail.com',
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    install_requires=install_requires
)
