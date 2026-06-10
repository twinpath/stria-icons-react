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
var Raygun_exports = {};
__export(Raygun_exports, {
  default: () => Raygun_default
});
module.exports = __toCommonJS(Raygun_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RaygunSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 31.973H304C295.25 31.973 288 39.102 288 47.977V75.199C273.402 68.231 257.254 64.008 240 64.008H191.057L88.232 2.313C77.568 -4.086 64 3.594 64 16.031V75.195C26.264 93.211 0 131.406 0 176.008C0 235.266 46.17 283.278 104.424 287.242L33.939 408.024C27.564 419.024 25.814 432.149 29.189 444.403C32.439 456.781 40.564 467.281 51.564 473.531L106.939 505.535C118.064 511.91 131.064 513.66 143.439 510.41C155.689 507.035 166.189 499.031 172.564 488.031L288 288.008V304.008C288 312.758 295.25 320.008 304 320.008H320C328.75 320.008 335.875 313.008 336 304.258V47.727C335.875 38.977 328.75 31.973 320 31.973ZM112 200C98.75 200 88 189.246 88 175.996C88 162.742 98.75 151.992 112 151.992S136 162.742 136 175.996C136 189.246 125.25 200 112 200ZM208 200C194.75 200 184 189.246 184 175.996C184 162.742 194.75 151.992 208 151.992S232 162.742 232 175.996C232 189.246 221.25 200 208 200ZM569.375 119.438C565.125 116.438 559.875 115.563 555 117.188H554.875L480 142.192H416V79.977C416 71.102 408.875 63.977 400 63.977H384C375.25 63.977 368 71.102 368 79.977V272C368 280.754 375.25 288.004 384 288.004H400C408.875 288.004 416 280.754 416 272V206.199H480.125L554.875 231.203C559.75 232.828 565.125 231.953 569.375 228.953C573.5 225.953 576 221.078 576 215.953V132.438C576 127.188 573.5 122.438 569.375 119.438Z" })
  }
));
RaygunSolid.displayName = "RaygunSolid";
var Raygun_default = RaygunSolid;
