import express from 'express';

const app = express();

app.use(cors());
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static("public"));

export default app;
