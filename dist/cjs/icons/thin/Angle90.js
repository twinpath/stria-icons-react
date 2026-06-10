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
var Angle90_exports = {};
__export(Angle90_exports, {
  default: () => Angle90_default
});
module.exports = __toCommonJS(Angle90_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Angle90Thin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440 464H16V40C16 35.578 12.422 32 8 32S0 35.578 0 40V472C0 476.406 3.578 480 8 480H440C444.422 480 448 476.406 448 472S444.422 464 440 464ZM348.578 424C348.953 424 349.344 423.969 349.719 423.906C354.094 423.281 357.141 419.25 356.516 414.875C352.641 387.781 345.516 361.187 335.344 335.875C333.687 331.75 329.062 329.844 324.937 331.406C320.844 333.062 318.859 337.719 320.5 341.812C330.187 365.969 336.984 391.312 340.672 417.125C341.25 421.125 344.672 424 348.578 424ZM276.891 265.156C278.469 267.219 280.844 268.297 283.25 268.297C284.953 268.297 286.656 267.766 288.109 266.656C291.609 263.969 292.297 258.953 289.609 255.438C270.844 230.891 248.906 208.953 224.375 190.266C220.891 187.609 215.875 188.234 213.172 191.781C210.484 195.297 211.172 200.313 214.688 202.984C238.062 220.812 259 241.734 276.891 265.156ZM62.875 139.328C88.703 143.016 114.031 149.812 138.172 159.5C139.156 159.891 140.156 160.078 141.156 160.078C144.328 160.078 147.328 158.188 148.578 155.062C150.219 150.953 148.234 146.297 144.141 144.656C118.812 134.484 92.234 127.359 65.125 123.484C60.875 122.953 56.703 125.891 56.078 130.281C55.453 134.641 58.5 138.703 62.875 139.328Z" })
  }
));
Angle90Thin.displayName = "Angle90Thin";
var Angle90_default = Angle90Thin;
