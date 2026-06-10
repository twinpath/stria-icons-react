var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var CloudWord_exports = {};
__export(CloudWord_exports, {
  default: () => CloudWord_default
});
module.exports = __toCommonJS(CloudWord_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudWordThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M537.594 226.594C541.688 215.906 544 204.188 544 192C544 139 501 96 448 96C428.312 96 409.906 102.016 394.688 112.188C367 64.188 315.312 32 256 32C167.594 32 96 103.578 96 192C96 194.688 96.094 197.406 96.188 200.094C40.188 219.812 0 273.219 0 336C0 415.484 64.5 480 144 480H512C582.688 480 640 422.688 640 352C640 290.078 596 238.406 537.594 226.594ZM512 464H144C73.406 464 16 406.594 16 336C16 281.734 50.375 233.188 101.5 215.203L112.594 211.297L112.188 199.516C112.094 197.031 112 194.531 112 192C112 112.609 176.594 48 256 48C307.281 48 355.125 75.688 380.844 120.188L389.375 135L403.594 125.469C416.781 116.672 432.125 112 448 112C492.125 112 528 147.875 528 192C528 201.891 526.219 211.609 522.656 220.859L515.906 238.531L534.438 242.266C586.344 252.766 624 298.906 624 352C624 413.766 573.75 464 512 464ZM288 312C288 307.578 284.406 304 280 304H136C131.594 304 128 307.578 128 312S131.594 320 136 320H280C284.406 320 288 316.422 288 312ZM216 368H168C163.594 368 160 371.578 160 376S163.594 384 168 384H216C220.406 384 224 380.422 224 376S220.406 368 216 368ZM472 368H424C419.594 368 416 371.578 416 376S419.594 384 424 384H472C476.406 384 480 380.422 480 376S476.406 368 472 368ZM376 368H264C259.594 368 256 371.578 256 376S259.594 384 264 384H376C380.406 384 384 380.422 384 376S380.406 368 376 368ZM504 304H328C323.594 304 320 307.578 320 312S323.594 320 328 320H504C508.406 320 512 316.422 512 312S508.406 304 504 304Z" })
  }
));
CloudWordThin.displayName = "CloudWordThin";
var CloudWord_default = CloudWordThin;
