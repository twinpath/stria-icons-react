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
var UsersSlash_exports = {};
__export(UsersSlash_exports, {
  default: () => UsersSlash_default
});
module.exports = __toCommonJS(UsersSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UsersSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M178.977 464C189.451 427.236 226.34 400 270.113 400H369.887C376.717 400 383.289 400.873 389.709 402.133L325.746 352H270.113C191.631 352 128 411.693 128 485.332C128 500.059 140.727 512 156.422 512H483.578C495.195 512 505.119 505.414 509.527 496.043L468.645 464H178.977ZM396.566 285.506C413.379 267.15 423.814 242.906 423.814 216C423.814 158.562 377.273 112 319.859 112C283.928 112 252.787 130.525 234.27 158.303L193.123 126.053C202.438 113.074 208 97.24 208 80C208 35.818 172.18 0 128 0C103.826 0 82.52 10.973 67.957 27.951L38.814 5.109C34.408 1.672 29.189 0 24.033 0C16.908 0 9.846 3.156 5.127 9.188C-3.061 19.625 -1.248 34.717 9.189 42.889L601.186 506.883C611.686 515.086 626.748 513.211 634.873 502.805C643.061 492.367 641.248 477.273 630.811 469.102L396.566 285.506ZM358.908 255.992L271.828 187.74C281.57 171.225 299.348 160 319.859 160C350.713 160 375.814 185.121 375.814 216C375.814 231.672 369.311 245.818 358.908 255.992ZM512 160C556.184 160 592 124.182 592 80S556.184 0 512 0C467.82 0 432 35.818 432 80S467.82 160 512 160ZM490.08 192C477.279 192 465.195 195.037 454.221 200.24C454.834 205.475 455.814 210.604 455.814 216C455.814 249.715 443.033 280.211 422.65 304H622.385C632.113 304 640 295.641 640 285.332C640 233.785 600.566 192 551.92 192H490.08ZM186.969 243.227L121.607 192H88.08C39.438 192 0 233.785 0 285.332C0 295.641 7.887 304 17.615 304H217.07C202.357 286.828 191.812 266.076 186.969 243.227Z" })
  }
));
UsersSlashRegular.displayName = "UsersSlashRegular";
var UsersSlash_default = UsersSlashRegular;
