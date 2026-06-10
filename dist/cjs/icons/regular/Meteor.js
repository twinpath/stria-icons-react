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
var Meteor_exports = {};
__export(Meteor_exports, {
  default: () => Meteor_default
});
module.exports = __toCommonJS(Meteor_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MeteorRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M462.448 42.837C453.947 71.087 433.32 137.462 410.068 195.962C420.444 199.962 428.57 208.087 432.445 218.337C436.32 228.712 435.695 240.087 430.57 249.837C408.568 291.962 351.188 396.212 294.183 453.212C215.801 531.587 88.914 531.587 10.532 453.212C-67.6 375.087 -67.6 247.837 10.532 169.712C67.787 112.587 171.797 55.462 214.051 33.462C223.801 28.337 235.302 27.587 245.553 31.462S263.93 43.462 267.93 53.712C326.186 30.587 392.817 9.962 421.194 1.462C432.945 -2.163 445.696 1.087 454.322 9.712C462.948 18.337 466.073 31.087 462.448 42.837ZM345.312 226.712L356.063 201.837C376.565 153.962 396.192 94.337 408.443 55.462C369.564 67.712 309.684 87.462 262.18 107.962L237.178 118.587L229.677 92.587C228.427 88.587 227.302 84.837 226.177 81.212C186.298 102.462 93.665 154.462 44.535 203.587C-14.845 263.087 -14.845 359.837 44.535 419.212C73.163 447.837 111.916 463.962 152.42 463.962C192.799 463.962 231.677 447.837 260.18 419.212C308.684 370.837 358.814 282.462 382.691 237.712C379.065 236.712 375.315 235.587 371.315 234.337L345.312 226.712ZM263.93 311.962C263.93 373.837 213.8 423.962 151.92 423.962S39.91 373.837 39.91 311.962S90.164 199.962 151.92 199.962C213.8 199.962 263.93 250.087 263.93 311.962ZM151.92 287.962C151.92 274.712 141.169 263.962 127.918 263.962S103.916 274.712 103.916 287.962S114.667 311.962 127.918 311.962C134.293 311.962 140.419 309.462 144.919 304.962C149.42 300.462 151.92 294.337 151.92 287.962ZM183.923 359.962C183.923 351.087 176.797 343.962 167.921 343.962C159.171 343.962 151.92 351.087 151.92 359.962S159.171 375.962 167.921 375.962C176.797 375.962 183.923 368.837 183.923 359.962Z" })
  }
));
MeteorRegular.displayName = "MeteorRegular";
var Meteor_default = MeteorRegular;
