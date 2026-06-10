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
var Feather_exports = {};
__export(Feather_exports, {
  default: () => Feather_default
});
module.exports = __toCommonJS(Feather_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FeatherSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M483.356 244.239L351.87 287.986H449.61C439.736 298.61 453.359 284.861 403.365 334.857L255.755 383.979H353.995C279.002 457.098 159.39 454.598 107.145 438.974L41.027 504.969C31.653 514.344 16.405 514.344 7.031 504.969C-2.344 495.595 -2.344 480.346 7.031 470.972L266.504 211.742C272.753 205.492 272.753 195.368 266.504 189.119C260.254 182.869 250.13 182.869 243.881 189.119L65.524 367.355C58.775 306.985 68.649 216.617 129.143 156.246C153.89 131.498 136.267 149.122 214.884 70.628C305.5 -19.99 404.614 -17.615 467.108 44.88C517.728 95.376 528.852 169.745 483.356 244.239Z" })
  }
));
FeatherSolid.displayName = "FeatherSolid";
var Feather_default = FeatherSolid;
