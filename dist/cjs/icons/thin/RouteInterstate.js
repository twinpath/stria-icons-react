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
var RouteInterstate_exports = {};
__export(RouteInterstate_exports, {
  default: () => RouteInterstate_default
});
module.exports = __toCommonJS(RouteInterstate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RouteInterstateThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480.847 55.125C477.798 45.348 469.267 38.488 459.943 38.488C458.179 38.488 456.388 38.732 454.601 39.25C436.353 44.25 416.855 47.125 396.482 47.125C347.363 47.125 302.993 31.125 270.372 5C266.124 1.625 261.124 0 255.999 0C250.876 0 245.876 1.625 241.626 5C209.13 31.125 164.636 47.125 115.517 47.125C95.146 47.125 75.648 44.25 57.4 39.125C55.665 38.643 53.923 38.414 52.212 38.414C42.824 38.412 34.218 45.293 31.154 55.125C-5.842 175.125 9.406 410.375 255.999 512C502.593 410.375 517.841 175.125 480.847 55.125ZM255.999 494.645C104.816 429.836 44.949 309.275 33.911 200H478.081C467.046 309.285 407.177 429.84 255.999 494.645ZM479.22 184H32.773C30.105 138.359 35.529 95.24 46.427 59.887C47.561 56.255 50.435 54.394 53.074 54.529C73.382 60.232 94.392 63.125 115.517 63.125C166.685 63.125 215.031 46.91 251.577 17.529C254.321 15.349 258.028 15.628 260.37 17.488C297.118 46.918 345.456 63.125 396.482 63.125C417.404 63.125 438.38 60.283 459.943 54.488C461.882 54.488 464.519 56.508 465.556 59.84C476.46 95.211 481.888 138.348 479.22 184Z" })
  }
));
RouteInterstateThin.displayName = "RouteInterstateThin";
var RouteInterstate_default = RouteInterstateThin;
