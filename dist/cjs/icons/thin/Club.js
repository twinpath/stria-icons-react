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
var Club_exports = {};
__export(Club_exports, {
  default: () => Club_default
});
module.exports = __toCommonJS(Club_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClubThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M376 176C375.473 176 374.986 176.15 374.459 176.156C380.518 161.273 384 145.061 384 128C384 57.307 326.693 0 256 0S128 57.307 128 128C128 145.061 131.482 161.273 137.541 176.156C137.014 176.15 136.527 176 136 176C60.889 176 0 236.889 0 312C0 387.109 60.889 448 136 448C182.865 448 223.633 423.939 248 387.811V496H168C163.578 496 160 499.578 160 504S163.578 512 168 512H344C348.422 512 352 508.422 352 504S348.422 496 344 496H264V387.811C288.367 423.939 329.135 448 376 448C451.111 448 512 387.109 512 312C512 236.889 451.111 176 376 176ZM404.785 428.514C349.857 441.9 295.559 415.73 270.172 367.297V367.295C264.18 355.865 247.82 355.865 241.828 367.295V367.297C216.439 415.732 162.135 441.904 107.203 428.51C57.172 416.312 19.922 372.01 16.305 320.643C11.391 250.857 66.533 192.461 135.186 192.002L161.436 192.418L152.359 170.123C146.812 156.496 144 142.324 144 128C144 66.242 194.242 16 256 16S368 66.242 368 128C368 142.324 365.188 156.496 359.641 170.123L350.564 192.418L376.893 192.004C445.516 192.508 500.627 250.906 495.693 320.678C492.061 372.037 454.809 416.322 404.785 428.514Z" })
  }
));
ClubThin.displayName = "ClubThin";
var Club_default = ClubThin;
