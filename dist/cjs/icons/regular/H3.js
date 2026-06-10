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
var H3_exports = {};
__export(H3_exports, {
  default: () => H3_default
});
module.exports = __toCommonJS(H3_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const H3Regular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M296 64C282.75 64 272 74.75 272 88V224H48V88C48 74.75 37.25 64 24 64S0 74.75 0 88V424C0 437.25 10.75 448 24 448S48 437.25 48 424V272H272V424C272 437.25 282.75 448 296 448S320 437.25 320 424V88C320 74.75 309.25 64 296 64ZM534.594 223.406H500.469L615.984 104.5C622.703 97.594 624.625 87.312 620.875 78.438C617.109 69.562 608.406 63.781 598.766 63.781H400C386.75 63.781 376 74.531 376 87.781S386.75 111.781 400 111.781H541.984L426.469 230.688C419.75 237.594 417.828 247.875 421.578 256.75C425.344 265.625 434.047 271.406 443.688 271.406H534.594C566.25 271.406 592 300.188 592 335.594S566.25 399.781 534.594 399.781H457.484C441.969 399.781 428.078 388.563 422.938 371.844C419.031 359.188 405.703 352.031 392.938 355.969C380.266 359.875 373.156 373.281 377.062 385.969C388.438 422.937 420.75 447.781 457.484 447.781H534.594C592.719 447.781 640 397.469 640 335.594S592.719 223.406 534.594 223.406Z" })
  }
));
H3Regular.displayName = "H3Regular";
var H3_default = H3Regular;
