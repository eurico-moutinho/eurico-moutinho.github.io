import React from 'react';
import './Projectos.sass';
import axios from "axios";
import { useState, useEffect } from "react";
import AnimatedPage from '../../components/animatedPage/AnimatedPage';
import Template from './Template.jsx';

const Projectos: React.FC = () => {

  interface Project {

    title: string;
    year: string;
    image: string;
    languages: { class: string; title: string }[];
    with: string;
    description: string;
    deployLink: string;
    githubLink: string;

  };

  const [dataList, setData] = useState<Project[]>([]);

  useEffect(() => {

    axios.get<Project[]>(
      '../../../data/projects.json',
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }).then( r => {

        setData(r.data);
  
      });

  }, []);

  return (
    <AnimatedPage>
      <Template dataList={dataList}/>
    </AnimatedPage>
  );
}

export default Projectos;