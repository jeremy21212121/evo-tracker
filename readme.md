# evo-tracker

This is a work-in-progress project, this repo is currently not functional.

What this will do, is store the location of evo cars over time. This is a fun data project to see what kind of insights can be gained. For example, the api only returns info on a car if it is not in use. By calling the API regularily, we can possibly infer information about the trip based on where the car disappeared, where it re-appeared, drop in fuel percentage and time difference between the two, assuming we know the approximate fuel consumption of the vehicles.

Hopefully I find time to work on this soon! In the mean time, im calling the API every 5 minutes with a cron job and storing the reponse in JSON files.
