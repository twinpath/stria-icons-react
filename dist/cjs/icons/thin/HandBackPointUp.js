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
var HandBackPointUp_exports = {};
__export(HandBackPointUp_exports, {
  default: () => HandBackPointUp_default
});
module.exports = __toCommonJS(HandBackPointUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandBackPointUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M316.938 512H194.312C172.562 512 150.937 506.5 131.781 496.125L68.375 461.687C45.938 449.531 32 426.125 32 400.562V323.125C32 301.906 41.5 282.094 58.094 268.812L71.938 257.75C73.408 256.56 75.171 255.982 76.924 255.982C81.18 255.982 84.932 259.406 84.932 264.001C84.932 266.351 83.907 268.675 81.938 270.25L68.094 281.312C55.312 291.531 48 306.781 48 323.125V400.562C48 420.219 58.719 438.281 76 447.625L139.406 482.062C156.219 491.188 175.219 496 194.312 496H316.937C380.375 496 432 444.375 432 380.938V278.156C432 257.125 414.875 240 393.844 240H378.562C378.531 240 376.25 240.25 376.25 240.25C375.93 240.299 375.61 240.323 375.292 240.323C372.166 240.323 369.234 238.026 368.156 234.906C362.656 219.062 347.906 208 332.312 208H316.937C302.153 208 299.303 213.526 294.291 213.526C291.642 213.526 289.078 212.221 287.562 209.813C280.469 198.656 268.438 192 255.375 192H246.781C227.314 192 223.137 203.986 215.996 203.986C212.527 203.986 208 201.293 208 195.969V56C208 33.938 190.062 16 168 16S128 33.938 128 56V344C128 348.406 124.406 352 120 352S112 348.406 112 344V56C112 25.125 137.125 0 168 0S224 25.125 224 56V181.125C231.125 177.781 238.875 176 246.781 176H255.375C271.594 176 286.656 183.188 296.875 195.5C303 193.188 309.688 192 316.938 192H332.313C353 192 371.875 204.625 380.969 224H393.844C423.719 224 448 248.281 448 278.156V380.938C448 453.219 389.219 512 316.938 512Z" })
  }
));
HandBackPointUpThin.displayName = "HandBackPointUpThin";
var HandBackPointUp_default = HandBackPointUpThin;
