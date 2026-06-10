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
var LassoSparkles_exports = {};
__export(LassoSparkles_exports, {
  default: () => LassoSparkles_default
});
module.exports = __toCommonJS(LassoSparkles_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LassoSparklesRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.016 79.992L256 80L256.018 80.008C256.021 82.27 257.67 84.949 259.695 85.963L309.268 106.633L309.342 106.67L330.035 156.301C331.051 158.344 333.719 160 336 160C338.277 160 340.943 158.344 341.959 156.301L362.654 106.674L362.656 106.672L362.754 106.623L412.303 85.963C414.33 84.949 415.979 82.27 415.982 80.008L416 80L415.984 79.992C415.98 77.717 414.332 75.053 412.303 74.037L362.73 53.365L362.656 53.328L341.959 3.695C340.943 1.652 338.277 0 336 0C333.719 0 331.051 1.652 330.035 3.695L309.34 53.33L309.291 53.355L259.695 74.037C257.668 75.053 256.02 77.717 256.016 79.992ZM572.314 426.035L522.674 405.336L501.977 355.693C500.961 353.65 498.295 352 496.016 352C493.738 352 491.068 353.65 490.053 355.693L469.354 405.336L419.711 426.035C417.684 427.051 416.029 429.721 416.029 431.996C416.029 434.262 417.684 436.947 419.711 437.963L469.354 458.662L490.053 508.301C491.068 510.342 493.738 512 496.016 512C498.295 512 500.961 510.342 501.977 508.301L522.674 458.662L572.314 437.963C574.346 436.947 576 434.262 576 431.996C576 429.721 574.346 427.051 572.314 426.035ZM576 178.625C576 98.254 494.404 31.92 378.713 8.832L387.125 28.937L424.625 44.5C439.406 51.797 447.812 65.203 448 79.562C447.988 80.482 447.678 81.316 447.607 82.223C496.545 106.336 528 140.879 528 178.625C528 249.5 418.125 309.375 288 309.375C276.625 309.375 265.5 308.5 254.5 307.625C247.25 278.125 214.875 255.875 176 255.875C155.625 255.875 137.25 262.125 123.125 272.25C118.25 269.625 113 267.125 108.75 264.5C69.5 240.25 48 209.75 48 178.625C48 117.34 130.49 64.289 237.123 51.172C239.617 48.912 242.355 46.92 245.375 45.406L284.875 28.891L296.797 0.268C293.846 0.215 290.975 0 288 0C126.5 0 0 78.5 0 178.625C0 227 29.625 271.875 83.5 305.25C87.625 307.875 92.125 310.375 96.875 312.875C91.25 353.75 132.375 386.625 182.5 383.375C185.188 391.926 186.562 400.836 186.389 409.869C185.82 439.658 159.365 464 129.57 464H56C42.746 464 32 474.744 32 488C32 501.254 42.746 512 56 512H126.047C185.488 512 236.625 463.309 234.277 403.912C233.801 391.85 231.584 379.918 227.625 368.375C233.375 364.625 238.5 360.125 242.875 354.875C257.75 356.375 272.75 357.375 288 357.375C449.5 357.375 576 278.875 576 178.625Z" })
  }
));
LassoSparklesRegular.displayName = "LassoSparklesRegular";
var LassoSparkles_default = LassoSparklesRegular;
