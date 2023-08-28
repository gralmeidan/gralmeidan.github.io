import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/gralmeidan/gralmeidan.github.io', // Update to point to your repository
    user: {
      name: 'gralmeidan', // update to use your name
      email: 'gralmeidan@gmail.com', // Update to use your email
    },
    dotfiles: true,
  },
  e => {
    if (e) {
      console.log('Deploy error', e);
    } else {
      console.log('Deploy Complete!');
    }
  }
);
