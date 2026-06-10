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
var HandBackPointLeft_exports = {};
__export(HandBackPointLeft_exports, {
  default: () => HandBackPointLeft_default
});
module.exports = __toCommonJS(HandBackPointLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandBackPointLeftRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M270.953 95.426L241.721 128H72C32.299 128 0 160.299 0 200S32.299 272 72 272H154V285.531C154 301.441 159.205 316.607 168.814 329.082C168.273 332.586 168 336.131 168 339.688V353.219C168 375.332 178.551 396.324 196.047 409.957C197.437 448.811 230.078 480 270 480H368C447.402 480 512 417.055 512 339.688V231.813C512 208.373 505.897 185.084 494.352 164.463L462.998 108.633C447.529 81.102 417.979 64 385.875 64H338.906C312.242 64 287.473 75.455 270.953 95.426ZM385.875 112C400.641 112 414.156 119.719 421.141 132.156L452.484 187.938C460.016 201.406 464 216.563 464 231.813V339.688C464 390.594 420.937 432 368 432H270C255.656 432 244 420.969 244 407.375L244.219 392.344C244.224 392.188 244.227 392.032 244.227 391.876C244.227 371.454 216 378.809 216 353.219V339.688C216 329.699 221.583 327.984 221.583 319.805C221.583 303.441 202 306.481 202 285.531V272C202 260.313 212.844 255.344 213.875 254.875C220.024 252.453 224.04 246.579 224.04 240.146C224.04 232.027 217.616 224 208 224H72C58.766 224 48 213.219 48 200S58.766 176 72 176H336C344.844 176 352 168.844 352 160S344.844 144 336 144H291.828L307.516 126.5C315.141 117.281 326.594 112 338.906 112H385.875Z" })
  }
));
HandBackPointLeftRegular.displayName = "HandBackPointLeftRegular";
var HandBackPointLeft_default = HandBackPointLeftRegular;
