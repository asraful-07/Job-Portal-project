# Crowdcube

Crowdcube is a crowdfunding platform designed to help users raise funds for various projects, ideas, or causes. Whether you're looking to support personal needs, creative ideas, or startups, Crowdcube provides an easy-to-use and secure solution for both fundraisers and contributors.

## Features

- **Create Campaigns**: Start a fundraising campaign by providing details about your project or cause.
- **Explore Campaigns**: Browse through a wide range of active campaigns.
- **Secure Transactions**: Ensure safe and reliable payment processing for donations.
- **Track Progress**: View detailed statistics and monitor the progress of your campaign.
- **Categories**: Organize campaigns by categories for easier navigation.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase/Auth0
- **Payment Integration**: Stripe API

## Key Accomplishments

- Designed and implemented a responsive user interface using **React.js** and **Tailwind CSS**.
- Developed secure RESTful APIs with **Node.js** and **Express.js** for handling campaigns, donations, and user authentication.
- Integrated **Stripe API** for seamless and secure payment processing.
- Deployed the application with **Firebase Hosting**, ensuring scalability and reliability.
- Ensured database optimization and data integrity using **MongoDB**.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/crowdcube.git
   cd crowdcube
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

   ```env
   REACT_APP_API_URL=http://localhost:5000
   REACT_APP_STRIPE_PUBLIC_KEY=your-stripe-public-key
   FIREBASE_API_KEY=your-firebase-api-key
   FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## API Endpoints

### Authentication

- **POST** `/api/auth/login` - User login
- **POST** `/api/auth/register` - User registration

### Campaigns

- **GET** `/api/campaigns` - Fetch all campaigns
- **POST** `/api/campaigns` - Create a new campaign
- **GET** `/api/campaigns/:id` - Fetch campaign details

### Donations

- **POST** `/api/donations` - Process a donation
- **GET** `/api/donations/:campaignId` - Fetch donations for a campaign

## Folder Structure

```
├── public
├── src
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── CampaignCard.jsx
│   │   ├── DonationForm.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── CampaignDetails.jsx
│   │   ├── CreateCampaign.jsx
│   ├── utils
│   │   ├── api.js
│   │   ├── validators.js
│   ├── App.jsx
│   ├── index.js
└── package.json
```

## Soft Skills Demonstrated

- **Problem-Solving**: Tackled complex challenges like payment gateway integration and real-time campaign tracking.
- **Team Collaboration**: Worked collaboratively in a team environment, ensuring seamless communication and project delivery.
- **Adaptability**: Quickly learned and implemented new technologies to enhance the platform's features.
- **Attention to Detail**: Ensured high-quality code with thorough testing and debugging.

## Contribution

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

### Acknowledgments

- Thanks to all contributors and supporters of Crowdcube.
- Special mention to [Stripe](https://stripe.com) and [Firebase](https://firebase.google.com) for their amazing tools.

**Ready to Empower Fundraising!**
