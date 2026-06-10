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
var Broom_exports = {};
__export(Broom_exports, {
  default: () => Broom_default
});
module.exports = __toCommonJS(Broom_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BroomDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M628.031 57.242L402.816 232.43L363 182.293L588.719 6.715C602.719 -4.113 622.781 -1.566 633.625 12.338C644.5 26.275 641.969 46.383 628.031 57.242Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M93.125 257.721C71.25 275.094 53 313.467 38.625 355.088L99 333.09C104.75 330.965 109.625 337.84 105.625 342.588L11 454.705C3.75 486.953 0 510.201 0 510.201S206.625 523.824 266.625 476.078C326.625 428.207 343.25 325.965 343.25 325.965L256.5 216.723C256.5 216.723 153.125 209.975 93.125 257.721ZM435.625 274.219L327.625 138.229C322.5 131.855 312.5 133.105 309 140.479L283.75 194.975L370.5 304.217L429.25 291.717C437.25 290.092 440.625 280.594 435.625 274.219Z" })
    ]
  }
));
BroomDuotone.displayName = "BroomDuotone";
var Broom_default = BroomDuotone;
