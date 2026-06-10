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
var CircleM_exports = {};
__export(CircleM_exports, {
  default: () => CircleM_default
});
module.exports = __toCommonJS(CircleM_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleMDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM384 360C384 373.25 373.25 384 360 384S336 373.25 336 360V226.219L275.453 310.047C266.422 322.547 245.578 322.547 236.547 310.047L176 226.219V360C176 373.25 165.25 384 152 384S128 373.25 128 360V152C128 141.594 134.719 132.359 144.609 129.172C154.469 125.922 165.359 129.484 171.453 137.953L256 255.016L340.547 137.953C346.641 129.484 357.437 125.922 367.391 129.172C377.281 132.359 384 141.594 384 152V360Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M367.391 129.172C357.437 125.922 346.641 129.484 340.547 137.953L256 255.016L171.453 137.953C165.359 129.484 154.469 125.922 144.609 129.172C134.719 132.359 128 141.594 128 152V360C128 373.25 138.75 384 152 384S176 373.25 176 360V226.219L236.547 310.047C245.578 322.547 266.422 322.547 275.453 310.047L336 226.219V360C336 373.25 346.75 384 360 384S384 373.25 384 360V152C384 141.594 377.281 132.359 367.391 129.172Z" })
    ]
  }
));
CircleMDuotone.displayName = "CircleMDuotone";
var CircleM_default = CircleMDuotone;
