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
const HandBackPointUpRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 338.906V385.875C32 417.979 49.102 447.529 76.633 462.998L132.463 494.352C153.084 505.896 176.373 512 199.812 512H307.687C385.055 512 448 447.402 448 368V270C448 230.078 416.811 197.438 377.957 196.047C364.324 178.551 343.332 168 321.219 168H307.687C304.131 168 300.586 168.273 297.082 168.814C284.607 159.205 269.441 154 253.531 154H240V72C240 32.299 207.701 0 168 0C128.299 0 96 32.299 96 72V241.721L63.426 270.953C43.455 287.473 32 312.242 32 338.906ZM80 338.906C80 326.594 85.281 315.141 94.5 307.516L112 291.828V336C112 344.844 119.156 352 128 352S144 344.844 144 336V72C144 58.766 154.781 48 168 48C181.219 48 192 58.766 192 72V208C192 217.578 199.941 224.04 208.146 224.04C214.579 224.04 220.453 220.024 222.875 213.875C223.344 212.844 228.312 202 240 202H253.531C274.497 202 271.454 221.583 287.805 221.583C296.016 221.583 297.651 216 307.687 216H321.219C346.765 216 339.486 244.227 359.876 244.227C360.032 244.227 360.188 244.224 360.344 244.219L375.375 244C388.969 244 400 255.656 400 270V368C400 420.938 358.594 464 307.687 464H199.812C184.562 464 169.406 460.016 155.938 452.484L100.156 421.141C87.719 414.156 80 400.641 80 385.875V338.906Z" })
  }
));
HandBackPointUpRegular.displayName = "HandBackPointUpRegular";
var HandBackPointUp_default = HandBackPointUpRegular;
