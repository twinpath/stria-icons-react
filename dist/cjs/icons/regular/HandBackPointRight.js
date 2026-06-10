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
var HandBackPointRight_exports = {};
__export(HandBackPointRight_exports, {
  default: () => HandBackPointRight_default
});
module.exports = __toCommonJS(HandBackPointRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandBackPointRightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M173.094 64H126.125C94.021 64 64.471 81.102 49.002 108.633L17.648 164.463C6.104 185.084 0 208.373 0 231.812V339.687C0 417.055 64.598 480 144 480H242C281.922 480 314.562 448.811 315.953 409.957C333.449 396.324 344 375.332 344 353.219V339.687C344 336.131 343.727 332.586 343.186 329.082C352.795 316.607 358 301.441 358 285.531V272H440C479.701 272 512 239.701 512 200S479.701 128 440 128H270.279L241.047 95.426C224.527 75.455 199.758 64 173.094 64ZM173.094 112C185.406 112 196.859 117.281 204.484 126.5L220.172 144H176C167.156 144 160 151.156 160 160S167.156 176 176 176H440C453.234 176 464 186.781 464 200S453.234 224 440 224H304C294.422 224 287.96 231.941 287.96 240.146C287.96 246.579 291.976 252.453 298.125 254.875C299.156 255.344 310 260.312 310 272V285.531C310 306.497 290.417 303.454 290.417 319.805C290.417 328.016 296 329.651 296 339.687V353.219C296 378.765 267.773 371.486 267.773 391.876C267.773 392.032 267.776 392.188 267.781 392.344L268 407.375C268 420.969 256.344 432 242 432H144C91.062 432 48 390.594 48 339.687V231.812C48 216.562 51.984 201.406 59.516 187.937L90.859 132.156C97.844 119.719 111.359 112 126.125 112H173.094Z" })
  }
));
HandBackPointRightRegular.displayName = "HandBackPointRightRegular";
var HandBackPointRight_default = HandBackPointRightRegular;
