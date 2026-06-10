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
var HandPointUp_exports = {};
__export(HandPointUp_exports, {
  default: () => HandPointUp_default
});
module.exports = __toCommonJS(HandPointUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandPointUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M243.104 296.311C249.865 314.639 267.352 327.812 288 327.812C300.896 327.812 312.568 322.641 321.201 314.336C325.969 335.814 345.105 351.953 368 351.953C394.469 351.953 416 330.422 416 303.953V232.156C416 205.688 394.469 184.156 368 184.156C355.105 184.156 343.436 189.328 334.803 197.629C330.041 176.143 310.9 160 288 160C275.086 160 263.398 165.182 254.764 173.504C249.953 152.082 230.854 136 208 136C195.662 136 184.512 140.809 176 148.484V48C176 21.531 154.469 0 128 0S80 21.531 80 48V280.809C52.932 284.73 32 307.863 32 336V414.922C32 434.828 42.844 453.156 60.25 462.766L123.875 497.859C140.625 507.109 159.625 512 178.75 512H306.688C366.656 512 415.688 463.219 416 403.203V376C416 371.578 412.406 368 408 368S400 371.578 400 376V403.156C399.75 454.359 357.875 496 306.688 496H178.75C162.312 496 146 491.797 131.625 483.859L68 448.766C55.656 441.969 48 429 48 414.922V336C48 313.938 65.938 296 88 296H176C193.656 296 208 310.359 208 328S193.656 360 176 360H128C123.594 360 120 363.578 120 368S123.594 376 128 376H176C202.469 376 224 354.469 224 328C224 321.619 222.691 315.551 220.422 309.977C229.254 307.592 237.059 302.836 243.104 296.311ZM368 200.156C385.656 200.156 400 214.516 400 232.156V303.953C400 321.594 385.656 335.953 368 335.953S336 321.594 336 303.953V232.156C336 214.516 350.344 200.156 368 200.156ZM288 176C305.656 176 320 190.359 320 208V279.812C320 297.453 305.656 311.812 288 311.812S256 297.453 256 279.812V208C256 190.359 270.344 176 288 176ZM96 48C96 30.359 110.344 16 128 16S160 30.359 160 48V263.812C160 269.438 161.1 274.85 162.953 280H96V48ZM210.879 295.23C203.227 287.092 192.795 281.773 181.098 280.516C177.965 275.469 176 269.842 176 263.812V184C176 166.359 190.344 152 208 152S240 166.359 240 184V263.812C240 280.434 227.119 293.701 210.879 295.23Z" })
  }
));
HandPointUpThin.displayName = "HandPointUpThin";
var HandPointUp_default = HandPointUpThin;
