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
var MarsStrokeRight_exports = {};
__export(MarsStrokeRight_exports, {
  default: () => MarsStrokeRight_default
});
module.exports = __toCommonJS(MarsStrokeRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MarsStrokeRightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616.924 238.896L537.23 159.086C527.795 149.637 512.512 149.637 503.076 159.086S493.641 183.842 503.076 193.291L541.727 232H464V184C464 170.75 453.25 160 440 160S416 170.75 416 184V232H382.176C370.445 146.182 297.041 80 208 80C110.799 80 32 158.799 32 256S110.799 432 208 432C297.041 432 370.445 365.818 382.176 280H416V328C416 341.25 426.75 352 440 352S464 341.25 464 328V280H541.727L503.076 318.709C493.641 328.156 493.641 343.465 503.076 352.914C507.793 357.637 513.973 360 520.152 360S532.514 357.637 537.23 352.914L616.924 273.102C626.359 263.652 626.359 248.346 616.924 238.896ZM208 384C137.42 384 80 326.58 80 256S137.42 128 208 128S336 185.42 336 256S278.58 384 208 384Z" })
  }
));
MarsStrokeRightRegular.displayName = "MarsStrokeRightRegular";
var MarsStrokeRight_default = MarsStrokeRightRegular;
