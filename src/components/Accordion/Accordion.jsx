import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./style.css";
import Line from "../Line";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "1.6rem", color: "white" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#232323",
  flexDirection: "row-reverse",
  borderTop: ".7rem solid black",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <div className="accordion">
        <h1>Frequently Asked Questions</h1>

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography fontSize="1.8rem" color="white" padding={0.5}>
              What is Netflix?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div
              style={{
                backgroundColor: "#232323",
                padding: "1rem 2rem",
                margin: "0",
                fontSize: "1.5rem",
                color: "white",
                fontFamily: "Arial",
                lineHeight: "1.5",
              }}
            >
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want without a single commercial – all for
              one low monthly price. There's always something new to discover
              and new TV shows and movies are added every week!
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography fontSize="1.8rem" color="white" padding={0.5}>
              How much does Netflix cost?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div
              style={{
                backgroundColor: "#232323",
                padding: "1rem 2rem",
                margin: "0",
                fontSize: "1.5rem",
                color: "white",
                fontFamily: "Arial",
                lineHeight: "1.5",
              }}
            >
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              US$2.99 to US$9.99 a month. No extra costs, no contracts.
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography fontSize="1.8rem" color="white" padding={0.5}>
              Where can i watch?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div
              style={{
                backgroundColor: "#232323",
                padding: "1rem 2rem",
                margin: "0",
                fontSize: "1.5rem",
                color: "white",
                fontFamily: "Arial",
                lineHeight: "1.5",
                lineHeight: "1.5",
              }}
            >
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. You can also download your
              favorite shows with the iOS, Android, or Windows 10 app. Use
              downloads to watch while you're on the go and without an internet
              connection. Take Netflix with you anywhere.
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography fontSize="1.8rem" color="white" padding={0.5}>
              How do i cancel?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div
              style={{
                backgroundColor: "#232323",
                padding: "1rem 2rem",
                margin: "0",
                fontSize: "1.5rem",
                color: "white",
                fontFamily: "Arial",
                lineHeight: "1.5",
              }}
            >
              Netflix is flexible. There are no pesky contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography fontSize="1.8rem" color="white" padding={0.5}>
              What can i watch on Netflix?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div
              style={{
                backgroundColor: "#232323",
                padding: "1rem 2rem",
                margin: "0",
                fontSize: "1.5rem",
                color: "white",
                fontFamily: "Arial",
                lineHeight: "1.5",
              }}
            >
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography fontSize="1.8rem" color="white" padding={0.5}>
              Is Netflix good for Kids?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div
              style={{
                backgroundColor: "#232323",
                padding: "1rem 2rem",
                margin: "0",
                fontSize: "1.5rem",
                color: "white",
                fontFamily: "Arial",
                lineHeight: "1.5",
              }}
            >
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              movies in their own space. Kids profiles come with PIN-protected
              parental controls that let you restrict the maturity rating of
              content kids can watch and block specific titles you don’t want
              kids to see.
            </div>
          </AccordionDetails>
        </Accordion>

        <p
          style={{
            marginTop: "3rem",
            color: "white",
            textAlign: "center",
            fontSize: "1.3rem",
            fontFamily: "Arial",
            marginBottom: "1.5rem",
          }}
        >
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="header-input">
          <input type="text" placeholder="Email address" />
          <button>Get Started {">"}</button>
        </div>
      </div>
      <Line />
    </>
  );
}
