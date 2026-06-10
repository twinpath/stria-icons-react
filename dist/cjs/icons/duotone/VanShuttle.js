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
var VanShuttle_exports = {};
__export(VanShuttle_exports, {
  default: () => VanShuttle_default
});
module.exports = __toCommonJS(VanShuttle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VanShuttleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 320C115.816 320 80 355.816 80 400S115.816 480 160 480S240 444.184 240 400S204.184 320 160 320ZM480 320C435.816 320 400 355.816 400 400S435.816 480 480 480S560 444.184 560 400S524.184 320 480 320Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M628.875 210.625L494.391 49.268C485.271 38.326 471.762 32 457.518 32H48C21.6 32 0 53.6 0 80V336C0 362.4 21.6 384 48 384H49.613C57.438 329.791 103.625 288 160 288S262.562 329.791 270.387 384H369.613C377.438 329.791 423.625 288 480 288S582.562 329.791 590.387 384H592C618.4 384 640 362.4 640 336V241.375C640 230.125 636 219.25 628.875 210.625ZM160 192H64V96H160V192ZM320 192H224V96H320V192ZM384 192V96H450L530 192H384Z" })
    ]
  }
));
VanShuttleDuotone.displayName = "VanShuttleDuotone";
var VanShuttle_default = VanShuttleDuotone;
