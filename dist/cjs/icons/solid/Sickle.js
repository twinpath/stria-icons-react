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
var Sickle_exports = {};
__export(Sickle_exports, {
  default: () => Sickle_default
});
module.exports = __toCommonJS(Sickle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SickleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M129.933 308.74C123.677 302.495 113.443 302.499 107.192 308.75L84.691 331.25C78.441 337.5 78.441 347.75 84.691 354L87.316 356.75L9.373 434.753C-3.124 447.249 -3.124 467.511 9.373 480.007L31.994 502.627C44.492 515.124 64.754 515.124 77.251 502.627L155.319 424.5L158.069 427.25C164.32 433.5 174.445 433.5 180.695 427.25L203.321 404.625C209.573 398.374 209.569 388.237 203.312 381.991L129.933 308.74ZM317.927 0C220.911 0 149.918 68.496 131.853 149.85C117.958 212.288 142.717 277.075 188.825 322.203L220.911 352L256.66 317.01C217.753 253.46 232.533 167.283 304.032 123.144C347.613 96.191 404.711 94.46 449.682 119.188C468.378 129.326 484.673 143.298 497.432 160.112C502.611 166.913 513.475 161.967 511.833 153.683C500.969 99.653 447.282 0 317.927 0Z" })
  }
));
SickleSolid.displayName = "SickleSolid";
var Sickle_default = SickleSolid;
