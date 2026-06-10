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
const ArrowsUpDownLeftRightSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 256C512 264.188 508.875 272.375 502.625 278.625L430.625 350.625C424.375 356.875 416.188 360 408 360C389.721 360 376 345.053 376 328C376 319.812 379.125 311.625 385.375 305.375L402.75 288H288V402.75L305.375 385.375C311.625 379.125 319.812 376 328 376C346.279 376 360 390.947 360 408C360 416.188 356.875 424.375 350.625 430.625L278.625 502.625C272.375 508.875 264.188 512 256 512S239.625 508.875 233.375 502.625L161.375 430.625C155.125 424.375 152 416.188 152 408C152 390.947 165.731 376 184 376C192.188 376 200.375 379.125 206.625 385.375L224 402.75V288H109.25L126.625 305.375C132.875 311.625 136 319.812 136 328C136 345.053 122.269 360 104 360C95.812 360 87.625 356.875 81.375 350.625L9.375 278.625C3.125 272.375 0 264.188 0 256S3.125 239.625 9.375 233.375L81.375 161.375C87.625 155.125 95.812 152 104 152C122.279 152 136 166.947 136 184C136 192.188 132.875 200.375 126.625 206.625L109.25 224H224V109.25L206.625 126.625C200.375 132.875 192.188 136 184 136C165.721 136 152 121.053 152 104C152 95.812 155.125 87.625 161.375 81.375L233.375 9.375C239.625 3.125 247.812 0 256 0S272.375 3.125 278.625 9.375L350.625 81.375C356.875 87.625 360 95.812 360 104C360 121.053 346.269 136 328 136C319.812 136 311.625 132.875 305.375 126.625L288 109.25V224H402.75L385.375 206.625C379.125 200.375 376 192.188 376 184C376 166.947 389.731 152 408 152C416.188 152 424.375 155.125 430.625 161.375L502.625 233.375C508.875 239.625 512 247.812 512 256Z " })
  }
));
ArrowsUpDownLeftRightSolid.displayName = "ArrowsUpDownLeftRightSolid";
var ArrowsUpDownLeftRight_default = ArrowsUpDownLeftRightSolid;
