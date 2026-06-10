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
var Crutches_exports = {};
__export(Crutches_exports, {
  default: () => Crutches_default
});
module.exports = __toCommonJS(Crutches_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CrutchesSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M438.598 393.351C430.719 396.97 422.584 400.089 414.015 402.109L367.573 412.827L462.061 507.313C465.186 510.438 469.28 512 473.373 512C477.467 512 481.561 510.438 484.686 507.313L507.311 484.688C510.436 481.563 511.999 477.469 511.999 473.375C511.999 469.282 510.436 465.188 507.311 462.063L438.598 393.351ZM196.749 352.742L212.201 337.291L222.927 290.811L100.852 168.738L168.732 100.868L254.568 186.701C259.615 178.662 265.307 171.004 272.078 164.166L297.364 138.911L213.992 55.611L214.578 55.025C220.858 48.745 223.996 40.488 223.996 32.232C223.996 6.952 200.934 0 191.786 0C183.534 0 175.283 3.149 168.989 9.441L9.429 168.986C3.144 175.27 0 183.508 0 191.747C0 199.955 3.121 208.164 9.367 214.443L9.429 214.507C15.722 220.833 23.988 223.997 32.255 223.997C40.493 223.997 48.731 220.855 55.017 214.57L55.592 213.996L186.798 345.305C189.761 348.238 193.447 350.225 196.749 352.742ZM222.799 290.68L222.927 290.811L223.006 290.473L222.799 290.68ZM640 191.747C640 183.508 636.856 175.271 630.572 168.987L471.005 9.441C464.712 3.149 456.462 0 448.21 0C438.98 0 415.998 7.172 415.998 32.234C415.998 40.489 419.135 48.745 425.415 55.025L584.98 214.57C591.267 220.856 599.506 223.998 607.745 223.998C616.012 223.998 624.279 220.833 630.572 214.508L630.635 214.443C636.879 208.165 640 199.956 640 191.747ZM462.446 245.431L394.57 177.557L449.695 122.432L404.445 77.183L294.694 186.807C282.069 199.556 273.194 215.556 269.069 233.181L241.318 353.43L132.682 462.063C129.557 465.188 127.995 469.282 127.995 473.375C127.995 477.469 129.557 481.563 132.682 484.688L155.308 507.313C158.433 510.438 162.526 512 166.62 512C170.714 512 174.808 510.438 177.933 507.313L286.569 398.679L406.82 370.929C424.32 366.804 440.445 357.93 453.195 345.305L562.822 235.556L517.571 190.306L462.446 245.431ZM407.945 300.055C403.695 304.18 398.32 307.18 392.445 308.555L313.194 326.805L331.444 247.556C332.819 241.681 335.819 236.306 339.944 232.056L349.319 222.806L417.195 290.68L407.945 300.055Z " })
  }
));
CrutchesSolid.displayName = "CrutchesSolid";
var Crutches_default = CrutchesSolid;
