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
var PersonPraying_exports = {};
__export(PersonPraying_exports, {
  default: () => PersonPraying_default
});
module.exports = __toCommonJS(PersonPraying_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonPrayingThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M225.395 297.75C233.264 307.162 244.609 312.037 256.053 312.037C264.975 312.037 273.953 309.078 281.4 303L369.408 231C386.41 217 388.91 191.75 375.033 174.625C367.133 164.961 355.648 159.994 344.064 159.994C335.119 159.994 326.117 162.955 318.654 169L261.273 216L222.27 169.75C208.52 153.316 188.064 143.98 166.1 143.98C163.506 143.98 160.893 144.111 158.264 144.375C134.137 146.875 113.01 160.625 101.885 181.375L52.504 273.375C29.127 317 43.879 369.75 86.758 397.125L131.512 432H40.004C17.877 432 0 449.875 0 472S17.877 512 40.004 512H248.021C282.15 512 301.777 469.25 276.275 443.75L166.391 333.875L201.268 269L225.395 297.75ZM192.764 251.029L149.482 331.539C147.811 334.648 148.375 338.486 150.873 340.982L264.963 455.064C275.227 465.328 271.389 477.318 269.967 480.748C266.914 488.121 259.545 496 248.021 496H40.949C29.342 496 18.678 488.178 16.465 476.783C13.488 461.461 25.203 448 40.004 448H154.793C162.406 448 165.715 438.369 159.711 433.689L141.346 419.379L95.367 383.639C59.189 360.541 47.094 317.348 66.602 280.941L115.986 188.936C124.551 172.961 140.973 162.252 159.863 160.295C161.955 160.084 164.035 159.98 166.1 159.98C183.344 159.98 199.344 167.285 210.039 180.064L259.211 238.373L328.727 181.432C333.117 177.873 338.422 175.994 344.062 175.994C351.322 175.994 358.096 179.188 362.602 184.697C370.959 195.01 369.449 210.24 359.277 218.617L271.285 290.604C266.93 294.158 261.662 296.037 256.053 296.037C248.912 296.037 242.213 292.922 237.65 287.465L205.938 249.676C202.303 245.342 195.441 246.049 192.764 251.029ZM256 128C291.375 128 320 99.375 320 64S291.375 0 256 0S192 28.625 192 64S220.625 128 256 128ZM256 16C282.467 16 304 37.533 304 64S282.467 112 256 112S208 90.467 208 64S229.533 16 256 16Z" })
  }
));
PersonPrayingThin.displayName = "PersonPrayingThin";
var PersonPraying_default = PersonPrayingThin;
