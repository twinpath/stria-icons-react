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
var EarthAsia_exports = {};
__export(EarthAsia_exports, {
  default: () => EarthAsia_default
});
module.exports = __toCommonJS(EarthAsia_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EarthAsiaSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.461 16 16 123.418 16 256S123.461 496 256 496S496 388.582 496 256S388.539 16 256 16ZM64 256C64 150.133 150.131 64 256 64C274.715 64 292.762 66.816 309.877 71.836L267.504 104.375C262.418 107.75 262.781 115.375 268.352 118.125L279.129 123.625C284.578 126.25 287.969 131.875 287.969 137.875V216C287.969 220.375 284.457 224 279.977 224H276.949C273.922 224 271.137 222.25 269.805 219.625C268.23 216.5 263.871 216.25 262.055 219.25L244.617 248.25C241.711 253 236.504 256 230.934 256H230.57C226.332 256 222.336 257.75 219.309 260.75L213.617 266.375C210.59 269.5 210.59 274.5 213.617 277.625L219.309 283.375C222.336 286.375 224.031 290.375 224.031 294.625V304C224.031 312.875 216.887 320 208.047 320H201.871C195.816 320 190.246 316.625 187.582 311.125L164.938 265.875C162.516 261 155.977 260 152.102 263.875L132.727 283.25C129.699 286.25 125.582 288 121.344 288H66.891C65.129 277.57 64 266.922 64 256ZM407.297 373.789L401.797 379.25C398.77 382.25 394.652 384 390.414 384H375.277C371.039 384 366.922 382.25 364.016 379.25L350.938 366.25C344.277 359.625 334.711 357 325.508 359.25L304.316 364.625C302.984 364.875 301.652 365 300.32 365H290.027C285.789 365 281.672 363.375 278.766 360.375L266.777 348.5C265.324 347 264.477 344.875 264.477 342.75V332.625C264.477 329.375 266.414 326.375 269.562 325.125L308.797 309.375C310.855 308.625 312.672 307.625 314.488 306.375L338.102 289.5C339.555 288.5 341.129 288 342.824 288H354.934C358.082 288 360.988 290 362.32 293L367.648 305.75C368.254 307.25 369.707 308.25 371.281 308.25H375.156C376.852 308.25 378.426 307.125 378.91 305.375L383.148 290.875C383.633 289.25 385.207 288 387.023 288H393.078C395.258 288 397.074 289.75 397.074 292V305C397.074 307.125 397.922 309.125 399.375 310.625L411.242 322.5C414.27 325.5 415.965 329.625 415.965 333.875V358.375C415.965 360.168 415.512 361.895 414.943 363.57C412.549 367.094 409.912 370.438 407.297 373.789Z" })
  }
));
EarthAsiaSolid.displayName = "EarthAsiaSolid";
var EarthAsia_default = EarthAsiaSolid;
