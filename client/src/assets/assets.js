import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon
}

export const stepsData = [
    {
      title: 'Bring Your Vision to Life',
      description: 'Write a phrase, sentence, or story that captures the image you imagine.',
      icon: step_icon_1,
    },
    {
      title: 'Instant Visual Creation',
      description: 'Powered by advanced AI, your text is transformed into a unique, high-quality image in moments.',
      icon: step_icon_2,
    },
    {
      title: 'Grab It & Show It Off',
      description: ' Download your image or share it with friends right from here—super simple.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img_1,
        name: 'Arjun Kapoor',
        role:'Graphic Designer',
        stars:5,
        text: `For quick edits before sharing wedding previews with clients, bg.removal is my go-to solution. It handles intricate lehenga details and jewelry with impressive accuracy.`
    },
        {
        image:profile_img_2,
        name: 'Neha Gupta',
        role: 'Social Media Influencer',
        stars: 5,
        text: `Creating daily content is so much easier now! I can change backgrounds of my fashion photos anywhere, even from my phone, and the quality never disappoints my followers.`
    },
    {
        image:profile_img_3,
        name: 'Aryan Malhotra',
        role: 'Real Estate Photographer',
        stars:4,
        text:`I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
      },
]

export const plans = [
    {
      id: 'Basic',
      price: 50,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 100,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 400,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]