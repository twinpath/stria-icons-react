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
var Teamspeak_exports = {};
__export(Teamspeak_exports, {
  default: () => Teamspeak_default
});
module.exports = __toCommonJS(Teamspeak_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TeamspeakBrands = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M244.2 346.79c2.4-12.3-12-30-32.4-48.7-20.9-19.2-48.2-39.1-63.4-46.6-21.7-12-41.7-1.8-46.3 22.7-5 26.2 0 51.4 14.5 73.9 10.2 15.5 25.4 22.7 43.4 24 11.6.6 52.5 2.2 61.7-1 11.9-4.3 20.1-11.8 22.5-24.3zm205 20.8a5.22 5.22 0 0 0-8.3 2.4c-8 25.4-44.7 112.5-172.1 121.5-149.7 10.5 80.3 43.6 145.4-6.4 22.7-17.4 47.6-35 46.6-85.4-.4-10.1-4.9-26.69-11.6-32.1zm62-122.4c-.3-18.9-8.6-33.4-26-42.2-2.9-1.3-5-2.7-5.9-6.4A222.64 222.64 0 0 0 438.9 103c-1.1-1.5-3.5-3.2-2.2-5 8.5-11.5-.3-18-7-24.4Q321.4-31.11 177.4 13.09c-40.1 12.3-73.9 35.6-102 67.4-4 4.3-6.7 9.1-3 14.5 3 4 1.3 6.2-1 9.3C51.6 132 38.2 162.59 32.1 196c-.7 4.3-2.9 6-6.4 7.8-14.2 7-22.5 18.5-24.9 34L0 264.29v20.9c0 30.8 21 50.4 51.8 49 7.7-.3 11.7-4.3 12-11.5 2-77.5-2.4-95.4 3.7-125.8C92.1 72.39 234.3 5 345.3 65.39 411.4 102 445.7 159 447.6 234.79c.8 28.2 0 56.5 0 84.6 0 7 2.2 12.5 9.4 14.2 24.1 5 49.2-12 53.2-36.7 2.9-17.1 1-34.5 1-51.7zm-159.6 131.5c36.5 2.8 59.3-28.5 58.4-60.5-2.1-45.2-66.2-16.5-87.8-8-73.2 28.1-45 54.9-22.2 60.8z" })
  }
));
TeamspeakBrands.displayName = "TeamspeakBrands";
var Teamspeak_default = TeamspeakBrands;
