import React from 'react';

import python from '../assets/logos/python.svg';
import numpy from '../assets/logos/numpy.svg';
import pandas from '../assets/logos/pandas.svg';
import scipy from '../assets/logos/scipy.svg';
import scikitlearn from '../assets/logos/scikitlearn.svg';
import r from '../assets/logos/r.svg';
import fastapi from '../assets/logos/fastapi.svg';
import streamlit from '../assets/logos/streamlit.svg';
import mlflow from '../assets/logos/mlflow.svg';
import docker from '../assets/logos/docker.svg';
import git from '../assets/logos/git.svg';

const Logo = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-full h-full object-contain" />
);

export const Python = () => <Logo src={python} alt="Python" />;
export const Numpy = () => <Logo src={numpy} alt="NumPy" />;
export const Pandas = () => <Logo src={pandas} alt="Pandas" />;
export const Scipy = () => <Logo src={scipy} alt="SciPy" />;
export const Sklearn = () => <Logo src={scikitlearn} alt="scikit-learn" />;
export const RLang = () => <Logo src={r} alt="R" />;
export const FastAPI = () => <Logo src={fastapi} alt="FastAPI" />;
export const Streamlit = () => <Logo src={streamlit} alt="Streamlit" />;
export const MLflow = () => <Logo src={mlflow} alt="MLflow" />;
export const Docker = () => <Logo src={docker} alt="Docker" />;
export const Git = () => <Logo src={git} alt="Git" />;
