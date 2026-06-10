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
var VenusDouble_exports = {};
__export(VenusDouble_exports, {
  default: () => VenusDouble_default
});
module.exports = __toCommonJS(VenusDouble_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VenusDoubleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 176C368 78.799 289.201 0 192 0S16 78.799 16 176C16 270.5 90.541 347.385 184 351.596V408H104C99.594 408 96 411.594 96 416S99.594 424 104 424H184V504C184 508.406 187.594 512 192 512S200 508.406 200 504V424H280C284.406 424 288 420.406 288 416S284.406 408 280 408H200V351.596C293.459 347.385 368 270.5 368 176ZM192 336C103.775 336 32 264.225 32 176S103.775 16 192 16S352 87.775 352 176S280.225 336 192 336ZM624 176C624 78.969 545.031 0 448 0C411.781 0 377 10.906 347.406 31.562C343.812 34.094 342.906 39.094 345.438 42.719S352.938 47.187 356.594 44.687C383.469 25.906 415.062 16 448 16C536.219 16 608 87.781 608 176S536.219 336 448 336C415.062 336 383.469 326.094 356.594 307.312C352.938 304.781 347.969 305.656 345.438 309.281S343.813 317.906 347.406 320.437C374.795 339.555 406.699 349.898 440 351.396V408H360C355.594 408 352 411.594 352 416S355.594 424 360 424H440V504C440 508.406 443.594 512 448 512S456 508.406 456 504V424H536C540.406 424 544 420.406 544 416S540.406 408 536 408H456V351.596C549.307 347.369 624 270.33 624 176Z" })
  }
));
VenusDoubleThin.displayName = "VenusDoubleThin";
var VenusDouble_default = VenusDoubleThin;
