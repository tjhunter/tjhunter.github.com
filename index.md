---
layout: home
title: "Home"
---

## About

I am currently a software engineer at Databricks.

Prior to that, I did a Ph. D. in Machine Learning, in the 
Department of Computer Science at the
University of California at Berkeley. My advisors are [Pieter Abbeel](http://www.cs.berkeley.edu/%7Epabbeel/) and [Alexandre Bayen](http://lagrange.ce.berkeley.edu/bayen/).

## Projects

In the course of my work, I have created or co-created a few projects around data science and Machine Learning.


### Koalas

Koalas provides a pandas-like API and experience on top of Apache Spark. This dramatically helps the transition from "small scale" data science to "large scale" data science.

Website: [Github](https://github.com/databricks/koalas)

Announcement: [Databricks blog](https://databricks.com/blog/2019/04/24/koalas-easy-transition-from-pandas-to-apache-spark.html)

Presentations:
 - [Spark+AI Summit 2019]()
 - [Webinar](https://vimeo.com/345979096)

 
### Graphframes

Graphframes is a distributed graph processing interface built on top of Apache Spark, it is the recommended Graph interface for Spark until a future inclusion inside Spark. This work was co-authored with Joseph Bradley and Xiangrui Meng.

Website: [Documentation](http://graphframes.github.io/graphframes/docs/_site/index.html) [Github](https://github.com/graphframes/graphframes)

Presentations:
- [Spark+AI Summit]()

### spark-sklearn

`spark-sklearn` is a simple package that helps distributing `scikit-learn` models on Spark. It is useful when you want to apply or train millions of models on billions of data points.

Website: [Github](https://github.com/databricks/spark-sklearn) [Announcement](https://databricks.com/blog/2016/02/08/auto-scaling-scikit-learn-with-apache-spark.html)


### TensorFrames

Tensorframes is a wrapper between Google TensorFlow and Apace Spark. While I would not recommend using it directly these days, it drove the efforts to integrate numerical stacks (numpy, tensorflow) into Spark, while limiting the communication overhead and offering a simple interface. If you want to use TensorFlow in Scala with Spark though, this is still one of the most efficient ways to do it.

Website: [Github](https://github.com/databricks/tensorframes)


### Deep Learning Pipelines

DLP augments Spark's standard Machine Learning toolkits with Deep Learning technologies. Using this package, one can easily apply DL models on large collections without having to learn new frameworks and still using all the ease of use of Spark. This is one of the recommended ways to apply a Keras or TensorFlow model on billions of data points.

Website: [Github](https://github.com/databricks/spark-deep-learning)  [Documentation](https://databricks.github.io/spark-deep-learning/docs/_site/index.html)


## Contact

I currently reside in Amsterdam, the Netherlands. You can reach me through one of the following methods:


**E Mail:**
tjhunter@eecs.berkeley.edu


**Social networks:**
I am also on [LinkedIn](http://www.linkedin.com/in/timotheehunter) and [Viadeo](http://www.viadeo.com/en/profile/timothee.hunter).


## Webinars

[Deep Learning on Apache® Spark™- Best Practices](https://vimeo.com/235852704) webinar for Data Science Central

[From Pandas to Apache Spark™](https://vimeo.com/345979096) webinar for Data Science Central

[An old presentation to UK Authority](https://vimeo.com/296648633) about the modern power of geospatial.

