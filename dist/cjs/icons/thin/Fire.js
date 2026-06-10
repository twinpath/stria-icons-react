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
var Fire_exports = {};
__export(Fire_exports, {
  default: () => Fire_default
});
module.exports = __toCommonJS(Fire_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FireThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M325.406 49.656C322.344 46.781 317.562 46.781 314.5 49.656C297.516 65.469 281.297 82.562 266.203 100.5C240.375 66 209.172 31.406 175.453 0C172.391 -2.875 167.609 -2.875 164.547 0C69.203 88.844 0 206.031 0 278.656C0 406.125 100.484 509.844 224 509.844S448 406.125 448 278.656C448 224.5 395.578 115.031 325.406 49.656ZM224 493.844C109.312 493.844 16 397.312 16 278.656C16 212.531 81.828 101 170 16.844C203.578 48.719 234.359 83.625 259.344 118.187C260.797 120.219 263.125 121.437 265.609 121.5C268.031 121.094 270.469 120.469 272.047 118.531C286.922 100.219 303 82.75 319.922 66.531C384.438 129.625 432 229.156 432 278.656C432 397.312 338.688 493.844 224 493.844ZM332.297 226.75C331.031 224.469 328.734 222.937 326.156 222.656C323.406 222.312 321 223.406 319.281 225.344L267.375 283.562C240.484 249.25 192.391 187.906 174.703 165.812C173.188 163.937 170.922 162.844 168.516 162.812H168.453C166.063 162.812 163.813 163.875 162.281 165.719C116.469 221.187 96.031 252.094 96.031 288.656C96.031 293.062 99.609 296.656 104.031 296.656S112.031 293.062 112.031 288.656C112.031 258.594 129.469 231.156 168.359 183.531C189.266 209.844 230.594 262.562 254.734 293.375C257.766 297.313 262.375 299.656 267.469 299.781H267.687C272.484 299.781 277.172 297.687 280.281 294.156L323.734 244.563C347.844 291.531 335.578 348.156 294.953 376.594C291.344 379.125 290.453 384.125 293 387.75C294.547 389.969 297.031 391.156 299.547 391.156C301.141 391.156 302.734 390.688 304.141 389.719C351.562 356.5 365.891 290.531 337.469 236.313C335.859 233.219 334.109 230.031 332.297 226.75Z" })
  }
));
FireThin.displayName = "FireThin";
var Fire_default = FireThin;
