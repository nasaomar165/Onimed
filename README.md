# OniMed AI Medical Report Reader

## Overview

The **OniMed AI Medical Report Reader** is a web application designed to assist healthcare professionals and patients in reading and interpreting medical reports. Built using **Next.js** and **Tailwind CSS**, this application leverages advanced AI technologies, including Google Gemini and the "mixedbread-ai/mxbai-embed-large-v1" model, to provide insightful analysis of medical documents. The application also utilizes **Pinecone** as a vector database to efficiently store and retrieve embeddings for enhanced performance.

## Links
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Disclaimer](#disclaimer)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **AI-Powered Analysis**: Utilizes the Google Gemini model and the mixedbread-ai/mxbai-embed-large-v1 model to analyze and interpret medical reports.
- **User-Friendly Interface**: Built with Next.js and styled using Tailwind CSS for a responsive and modern user experience.
- **Vector Storage**: Employs Pinecone to store and manage vector embeddings, ensuring quick access to relevant information.
- **Theme Toggle**: Allows users to switch between light and dark themes for better accessibility and user preference.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **Google Gemini**: An AI model used for natural language processing and understanding.
- **Mixedbread-ai/mxbai-embed-large-v1**: A specific model for embedding and analyzing text data.
- **Pinecone**: A vector database for storing and querying embeddings efficiently.

## Installation

To get started with the AI Medical Report Reader, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/nasaomar165/onimed.git
   cd onimed
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env.local` file in the root directory and add your environment variables. You may need to include API keys for Google Gemini and Pinecone.

   ### Local Environment Variables Example
   Here’s an example of what your `.env.local` file might look like:
   ```plaintext
   GOOGLE_GEMINI_API_KEY=your_google_gemini_api_key
   PINECONE_API_KEY=your_pinecone_api_key
   HF_TOKEN=your_hangging_face_Token
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. **Open in Browser**:
   Navigate to `http://localhost:3000` to view the application.

## Usage

- Upload your medical report using the provided input field.
- The AI model will analyze the report and provide insights.
- Ask the AI about your report medical insights.

## Disclaimer

The medical advice and recommendations provided by this application are for informational purposes only and should not replace professional medical diagnosis, treatment, or advice. This project is not medically certified and is intended for development purposes only.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the developers of Next.js, Tailwind CSS, Google Gemini, and Pinecone for their amazing tools and resources that made this project possible.

