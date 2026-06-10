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
var CloudBolt_exports = {};
__export(CloudBolt_exports, {
  default: () => CloudBolt_default
});
module.exports = __toCommonJS(CloudBolt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudBoltDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352.003 351.992H280.751L328.19 246.551C331.253 239.77 329.221 231.738 323.284 227.238C317.315 222.77 309.065 222.926 303.346 227.707L149.747 355.713C144.591 360.025 142.653 367.119 144.966 373.432C147.247 379.775 153.247 383.994 159.999 383.994H231.251L183.811 489.436C180.749 496.217 182.78 504.25 188.718 508.75C191.593 510.906 194.999 512 198.405 512C202.061 512 205.686 510.75 208.655 508.281L362.255 380.275C367.411 375.963 369.348 368.869 367.036 362.557C364.755 356.213 358.755 351.992 352.003 351.992Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 128C415.375 128 414.875 128.25 414.375 128.25C415.5 123 416 117.625 416 112C416 67.75 380.25 32 336 32C311.375 32 289.75 43.25 275 60.75C256.375 24.75 219.25 0 176 0C114.125 0 64 50.125 64 112C64 119.25 64.75 126.25 66.125 133.25C27.75 145.75 0 181.5 0 224C0 277 43 320 96 320H142.625L282.82 203.168C291.426 195.973 302.348 192.012 313.576 192.012C323.914 192.012 334.172 195.428 342.609 201.746C360.564 215.352 366.625 239.197 357.371 259.691L330.236 320H416C469 320 512 277 512 224S469 128 416 128Z" })
    ]
  }
));
CloudBoltDuotone.displayName = "CloudBoltDuotone";
var CloudBolt_default = CloudBoltDuotone;
