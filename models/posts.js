var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;
// add post Schema
const postSchema = new Schema({
    _jobID: Schema.Types.ObjectId,
    title: String,
    companyname: String,
    description: String,
    startdate: Date,
    enddate: Date,
    skills: String,
    location: String,
    salary: Number,
    experinece: String,
    dateOfJoining: Date,
    extraRequirement: String,
    noOfJobOpenings: Number,
    CompanyUrl: String,
    bondDetails: String,
    ReportingVenue: String,
    ResourcePersonContact: String,
    selectionProcedure: String,
    hrRef : {
        hrId: Schema.Types.ObjectId,
        ref: ['hrModelObj']
    },
    applicants: [
        {
            applicantId: Schema.Types.ObjectId,
            ref: ['applicantModelObj']
        }
    ]
}, {timestamps: true});

postSchema.methods.toJSONFor = function(user) {
    return {
        title: this.title,
        companyname: this.companyname,
        description: this.description,
        startdate: this.startdate,
        enddate: this.enddate,
        skills: this.skills,
        location: this.skills,
        salary: this.salary,
        experinece: this.experinece,
        dateOfJoining: this.dateOfJoining,
        extraRequirement: this.extraRequirement,
        noOfJobOpenings: this.noOfJobOpenings,
        CompanyUrl: this.CompanyUrl,
        bondDetails: this.bondDetails,
        ReportingVenue: this.ReportingVenue,
        ResourcePersonContact: this.ResourcePersonContact,
        selectionProcedure: this.selectionProcedure,   
    }
}

mongoose.model('postModel', postSchema);