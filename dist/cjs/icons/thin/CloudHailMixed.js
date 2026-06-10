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
var CloudHailMixed_exports = {};
__export(CloudHailMixed_exports, {
  default: () => CloudHailMixed_default
});
module.exports = __toCommonJS(CloudHailMixed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudHailMixedThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M177.219 371.766L97.219 499.766C94.875 503.5 96.016 508.438 99.766 510.781C101.078 511.609 102.547 512 104 512C106.656 512 109.266 510.672 110.781 508.234L190.781 380.234C193.125 376.5 191.984 371.562 188.234 369.219C184.531 366.906 179.562 368 177.219 371.766ZM32 448C14.25 448 0 462.25 0 480S14.25 512 32 512S64 497.75 64 480S49.75 448 32 448ZM32 496C23.027 496 16 488.971 16 480C16 471.027 23.027 464 32 464S48 471.027 48 480C48 488.971 40.973 496 32 496ZM81.219 371.766L56.219 411.766C53.875 415.5 55.016 420.438 58.766 422.781C60.078 423.609 61.547 424 63 424C65.656 424 68.266 422.672 69.781 420.234L94.781 380.234C97.125 376.5 95.984 371.562 92.234 369.219C88.547 366.906 83.578 368 81.219 371.766ZM369.219 371.766L289.219 499.766C286.875 503.5 288.016 508.438 291.766 510.781C293.078 511.609 294.547 512 296 512C298.656 512 301.266 510.672 302.781 508.234L382.781 380.234C385.125 376.5 383.984 371.562 380.234 369.219C376.562 366.906 371.578 368 369.219 371.766ZM465.219 371.766L441.219 410.172C438.875 413.906 440.016 418.844 443.766 421.188C445.078 422.016 446.547 422.406 448 422.406C450.656 422.406 453.266 421.078 454.781 418.641L478.781 380.234C481.125 376.5 479.984 371.562 476.234 369.219C472.531 366.906 467.562 368 465.219 371.766ZM224 448C206.25 448 192 462.25 192 480S206.25 512 224 512S256 497.75 256 480S241.75 448 224 448ZM224 496C215.027 496 208 488.971 208 480C208 471.027 215.027 464 224 464S240 471.027 240 480C240 488.971 232.973 496 224 496ZM416 448C398.25 448 384 462.25 384 480S398.25 512 416 512S448 497.75 448 480S433.75 448 416 448ZM416 496C407.027 496 400 488.971 400 480C400 471.027 407.027 464 416 464S432 471.027 432 480C432 488.971 424.973 496 416 496ZM273.219 371.766L249.219 410.172C246.875 413.906 248.016 418.844 251.766 421.188C253.078 422.016 254.547 422.406 256 422.406C258.656 422.406 261.266 421.078 262.781 418.641L286.781 380.234C289.125 376.5 287.984 371.562 284.234 369.219C280.547 366.906 275.578 368 273.219 371.766ZM416 128C415.375 128 414.875 128.25 414.375 128.25C415.5 123 416 117.625 416 112C416 67.75 380.25 32 336 32C311.375 32 289.75 43.25 275 60.75C256.375 24.75 219.25 0 176 0C114.125 0 64 50.125 64 112C64 119.25 64.75 126.25 66.125 133.25C27.75 145.75 0 181.5 0 224C0 277 43 320 96 320H416C469 320 512 277 512 224S469 128 416 128ZM416 304H96C51.889 304 16 268.111 16 224C16 189.551 38.135 159.193 71.08 148.463L84.557 144.072L81.824 130.166C80.598 123.914 80 117.971 80 112C80 59.064 123.064 16 176 16C211.674 16 244.162 35.965 260.789 68.102L271.797 89.377L287.234 71.061C299.77 56.189 317.088 48 336 48C371.289 48 400 76.709 400 112C400 116.691 399.584 120.91 398.73 124.896L394.582 144.25H414.375C415.479 144.25 416.443 144.146 417.277 144.01C460.801 144.697 496 180.316 496 224C496 268.111 460.111 304 416 304Z" })
  }
));
CloudHailMixedThin.displayName = "CloudHailMixedThin";
var CloudHailMixed_default = CloudHailMixedThin;
