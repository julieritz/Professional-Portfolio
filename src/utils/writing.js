function WritingCard(title, about, siteURL, blogURL, instagram, facebook, twitter, youtube, pinterest) {
    this.title = title;
    this.about = about;
    this.siteURL = siteURL;
    this.blogURL = blogURL;
    this.instagram = instagram;
    this.facebook = facebook;
    this.twitter = twitter;
    this.youtube = youtube;
    this.pinterest = pinterest;
};

const fairwayCard = new WritingCard(
    "Fairway Independent Mortgage Corporation",
    "Click blog button for email journey example. All social media by me from September 2020 - present.",
    "https://fairwayhometeamnw.com/",
    "",
    "https://www.instagram.com/fairwayhometeamnw/",
    "https://www.facebook.com/fairwayhometeamnw/",
    "",
    "hhttps://www.youtube.com/channel/UClIhNni4apvBJKTBmciVjagg",
    ""
);

const honeyRosesCard = new WritingCard(
    "Honey & Roses Coffee Co.",
    "All blogs & articles on website by me. Responsible for copywriting and editing main website product bios.",
    "https://honeyandrosescoffee.com/",
    "https://honeyandrosescoffee.squarespace.com/",
    "https://www.instagram.com/honeyandrosescoffee/",
    "https://www.facebook.com/honeyandrosescoffee/",
    "https://twitter.com/honeyrosesco",
    "https://www.youtube.com/channel/UCBKhpuYyyBSnLRwNatqjqgg",
    "https://www.pinterest.com/honeyandrosescoffee/"
);

const rideDucksCard = new WritingCard(
    "Ride the Ducks of Seattle",
    "Responsible for all blog posts, website copy and social media dating back to August 2018.",
    "https://www.ridetheducksofseattle.com/",
    "https://www.ridetheducksofseattle.com/blog",
    "https://www.instagram.com/seattleducks/",
    "https://www.facebook.com/pages/Ride-the-Duck-Seattle/117593118393033?rf=387639741434843",
    "https://twitter.com/SeattleDucks",
    "https://www.youtube.com/user/RidetheDucksSeattle",
    "https://www.pinterest.com/ridetheducks/"
);

const capaCard = new WritingCard(
    "CAPA the Global Education Network",
    "All blogs under author Julie Ritz are written or edited by me. Social media from March - September of 2017 by me.",
    "https://www.capa.org/",
    "https://capaworld.capa.org/",
    "https://www.instagram.com/capastudyabroad",
    "https://www.facebook.com/CAPAStudyAbroad",
    "https://twitter.com/capastudyabroad",
    "https://www.youtube.com/user/CAPAStudyAbroadTV",
    "https://www.pinterest.com/capastudyabroad/"
);

let writing = [fairwayCard, honeyRosesCard, rideDucksCard, capaCard];

export default writing;