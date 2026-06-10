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
var ArrowsUpDownLeftRight_exports = {};
__export(ArrowsUpDownLeftRight_exports, {
  default: () => ArrowsUpDownLeftRight_default
});
module.exports = __toCommonJS(ArrowsUpDownLeftRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsUpDownLeftRightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M184 136C192.188 136 200.375 132.875 206.625 126.625L224 109.25V224H288V109.25L305.375 126.625C311.625 132.875 319.812 136 328 136C346.279 136 360 121.053 360 104C360 95.812 356.875 87.625 350.625 81.375L278.625 9.375C272.375 3.125 264.188 0 256 0S239.625 3.125 233.375 9.375L161.375 81.375C155.125 87.625 152 95.812 152 104C152 121.053 165.731 136 184 136ZM328 376C319.812 376 311.625 379.125 305.375 385.375L288 402.75V288H224V402.75L206.625 385.375C200.375 379.125 192.188 376 184 376C165.721 376 152 390.947 152 408C152 416.188 155.125 424.375 161.375 430.625L233.375 502.625C239.625 508.875 247.812 512 256 512S272.375 508.875 278.625 502.625L350.625 430.625C356.875 424.375 360 416.188 360 408C360 390.947 346.269 376 328 376Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 256C512 264.188 508.875 272.375 502.625 278.625L430.625 350.625C424.375 356.875 416.188 360 408 360C389.721 360 376 345.053 376 328C376 319.812 379.125 311.625 385.375 305.375L402.75 288H109.25L126.625 305.375C132.875 311.625 136 319.812 136 328C136 345.053 122.269 360 104 360C95.812 360 87.625 356.875 81.375 350.625L9.375 278.625C3.125 272.375 0 264.188 0 256S3.125 239.625 9.375 233.375L81.375 161.375C87.625 155.125 95.812 152 104 152C122.279 152 136 166.947 136 184C136 192.188 132.875 200.375 126.625 206.625L109.25 224H402.75L385.375 206.625C379.125 200.375 376 192.188 376 184C376 166.947 389.731 152 408 152C416.188 152 424.375 155.125 430.625 161.375L502.625 233.375C508.875 239.625 512 247.812 512 256Z " })
    ]
  }
));
ArrowsUpDownLeftRightDuotone.displayName = "ArrowsUpDownLeftRightDuotone";
var ArrowsUpDownLeftRight_default = ArrowsUpDownLeftRightDuotone;
