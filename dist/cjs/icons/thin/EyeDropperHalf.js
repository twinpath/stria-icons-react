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
var EyeDropperHalf_exports = {};
__export(EyeDropperHalf_exports, {
  default: () => EyeDropperHalf_default
});
module.exports = __toCommonJS(EyeDropperHalf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EyeDropperHalfThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M301.38 320.049L88.081 320L189.745 216.219C192.839 213.062 192.776 208 189.62 204.906C186.495 201.812 181.43 201.875 178.305 205.031L51.54 334.438C39.131 346.844 32.005 364.031 32.005 381.594V421.156L1.094 474.531C-0.749 477.656 -0.218 481.625 2.346 484.188L27.817 509.656C29.348 511.188 31.411 512 33.475 512C34.85 512 36.225 511.656 37.475 510.906L90.856 480H130.424C147.989 480 165.178 472.875 177.524 460.531L307.01 333.719C310.167 330.625 310.229 325.563 307.135 322.406C305.555 320.795 303.471 320.039 301.38 320.049ZM166.272 449.156C156.835 458.594 143.77 464 130.424 464H88.7C87.294 464 85.919 464.375 84.7 465.094L34.788 494L18.005 477.219L46.913 427.312C47.633 426.094 48.008 424.719 48.008 423.312V381.594C48.008 368.25 53.415 355.188 62.917 345.688L72.407 336H281.813L166.272 449.156ZM483.157 28.906C464.53 10.281 439.745 0 413.399 0C387.02 0 362.235 10.281 343.608 28.906L223.921 148.578L197.682 122.344C194.557 119.219 189.495 119.219 186.37 122.344C183.243 125.469 183.243 130.531 186.37 133.656L378.393 325.656C379.956 327.219 381.987 328 384.051 328C386.114 328 388.145 327.219 389.708 325.656C392.833 322.531 392.833 317.469 389.708 314.344L363.469 288.109L483.157 168.438C521.631 129.938 521.6 67.344 483.157 28.906ZM352.157 276.797L235.235 159.891L354.923 40.219C370.549 24.594 391.301 16 413.399 16C435.495 16 456.247 24.594 471.842 40.219C504.065 72.437 504.065 124.875 471.842 157.125L352.157 276.797Z" })
  }
));
EyeDropperHalfThin.displayName = "EyeDropperHalfThin";
var EyeDropperHalf_default = EyeDropperHalfThin;
