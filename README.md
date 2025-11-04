# Chennai Urban Air & Noise

This project is a web application that visualizes and predicts air quality (AQI) and noise levels in Chennai. It provides historical data, near-term predictions, and a real-time dashboard.

## Architecture

The backend of this project is built on AWS, utilizing a serverless architecture to handle data processing, storage, and API requests. The following diagram illustrates the architecture:

<img width="538" height="666" alt="image" src="https://github.com/user-attachments/assets/6233f9c6-7400-43a2-98a7-87ef3d2e0cb0" />


### Key Components:

*   **S3 (Simple Storage Service):**
    *   **Raw Historical Data:** An S3 bucket stores the raw historical data from 2019 to the present, collected from government and other sources.
    *   **Processed & Predicted Data:** Another S3 bucket stores the results of data cleaning, transformation, and model predictions.
*   **AWS Glue:**
    *   **ETL Jobs:** Glue ETL jobs are used for data cleaning and transformation of the raw historical data.
*   **Amazon Athena / Amazon Redshift:**
    *   **Data Analysis & Querying:** Athena or Redshift is used for analyzing and querying the cleaned data.
*   **Amazon SageMaker:**
    *   **Model Training & Validation:** SageMaker is used for training and validating the trend-based forecasting models.
*   **AWS Lambda:**
    *   **Data Update Trigger:** A Lambda function is triggered to update the data, likely when new data is available in the S3 bucket.
*   **Amazon DynamoDB:**
    *   **Prediction Metadata & Area Index:** DynamoDB stores prediction metadata and an index of the areas.
*   **Amazon API Gateway:**
    *   **REST API Integration:** API Gateway provides a REST API for the frontend to interact with the backend services.
*   **Amazon CloudWatch:**
    *   **Model Performance Metrics:** CloudWatch is used to monitor the performance of the SageMaker models.
*   **Localhost Frontend / Dashboard:**
    *   **Visualization & Forecast Display:** The frontend is a localhost dashboard that visualizes the data and displays the forecasts.

## Frontend

The frontend is a Next.js application that provides an interactive dashboard for users to explore the data.
