var express = require("express");
const db = require("../db");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ message: "success" });
});

router.post("/register", function (req, res, next) {
  const { username, password, email } = req.body;
  console.log(req.body);
  console.log(username, password, email);

  db.query(
    "INSERT INTO users (username, password, email) VALUES (?,?,?)",
    [username, password, email],
    (error, result) => {
      if (error) {
        console.log(error);
        res.json({ status: "mysql error" });
      } else {
        res.json({ status: "success" });
      }
    }
  );
});

router.post("/login", function (req, res, next) {
  const { logUsername, logPassword, keepLogin } = req.body;
  console.log(req.body);
  console.log(logUsername, logPassword, keepLogin);

  db.query(
    "SELECT id, username, email, wishlist FROM users WHERE username=LOWER(?) AND password=LOWER(?) LIMIT 1",
    [logUsername, logPassword],
    (error, result) => {
      if (error) {
        console.log(error);
        res.json({ status: "mysql error" });
      } else if (result.length > 0) {
        res.json({
          status: "success",
          user: {
            id: result[0].id,
            username: result[0].username,
            email: result[0].email,
            keepLogin
          },
          wishlist: result[0].wishlist
        });
      } else {
        res.json({ status: "user not found" });
      }
    }
  );
});

router.put("/wishlist", function (req, res, next) {
  const { wishlist, id } = req.body;
  console.log(req.body);
  console.log(wishlist);
  if (wishlist && id) {
    db.query(
      "UPDATE users SET wishlist = ? WHERE id = ?",
      [wishlist, id],
      (error, result) => {
        if (error) {
          console.log(error);
          res.json({ status: "mysql error" });
        } else {
          res.json({ status: "wishlist saved" });
        }
      }
    );
  }
  else res.json({ status: "wishlist update failed" });
});

module.exports = router;
