import express from 'express';

export const router = express.Router();

/**
 * Spurning um Gala
 * @param {object} req Request hlutur
 * @param {object} res Response hlutur
 */
function home(req, res) {
  return res.render('home', {
    buttons: true,
    yes: false,
  });
}

/**
 * Hún segir já :D
 * @param {object} req Request hlutur
 * @param {object} res Response hlutur
 */
function yeey(req, res) {
  return res.render('yeey', {
    buttons: false,
    yes: true,
  });
}

/**
 * Hún segir nei :(
 * @param {object} req Request hlutur
 * @param {object} res Response hlutur
 */
function awkward(req, res) {
  const string = 'Awkward...';
  return res.render('awkward', {
    string: string,
    yes: false,
  });
}

router.get('/', home);
router.get('/yes', yeey);
router.get('/no', awkward);

