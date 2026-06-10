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
var PeopleCarryBox_exports = {};
__export(PeopleCarryBox_exports, {
  default: () => PeopleCarryBox_default
});
module.exports = __toCommonJS(PeopleCarryBox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PeopleCarryBoxRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128.02 95.997C154.518 95.997 176.015 74.498 176.015 47.998S154.518 0 128.02 0S80.025 21.499 80.025 47.998S101.523 95.997 128.02 95.997ZM511.982 95.997C538.479 95.997 559.977 74.498 559.977 47.998S538.479 0 511.982 0C485.484 0 463.986 21.499 463.986 47.998S485.484 95.997 511.982 95.997ZM599.973 250.617L580.975 172.244C576.725 154.87 564.226 140.245 547.478 132.871C530.605 125.496 511.732 126.371 496.108 135.246C470.486 149.62 455.737 182.744 449.238 201.368L437.114 236.117C436.489 237.742 435.364 239.242 433.739 240.367L415.991 250.492V127.996C415.991 119.246 408.742 111.996 399.993 111.996H240.009C231.26 111.996 224.011 119.246 224.011 127.996V250.492L206.262 240.367C204.637 239.242 203.388 237.742 202.763 236.117L190.639 201.368C184.14 182.744 169.391 149.62 143.769 135.246C128.145 126.371 109.272 125.496 92.399 132.871C75.775 140.245 63.277 154.87 58.902 172.244L40.029 250.742C34.905 271.741 42.029 293.865 58.277 308.24L127.02 368.238C133.27 373.738 137.269 381.363 137.894 389.737L145.893 489.859C146.768 498.984 154.768 513.233 171.766 511.858C184.89 510.733 194.764 499.234 193.764 486.109L185.014 376.863C183.765 361.738 176.765 347.739 165.266 337.739L113.147 292.241L137.894 200.118C140.644 205.368 157.517 251.867 157.517 251.867C161.392 263.116 168.766 272.616 180.515 280.741L217.386 300.24C222.011 302.615 227.135 303.865 232.26 303.865H407.742C412.992 303.865 418.116 302.615 422.741 300.24L459.612 280.741C471.361 272.616 478.735 263.116 482.609 251.867C482.609 251.867 499.483 205.243 502.232 200.118L526.98 292.241L474.735 337.739C463.361 347.739 456.237 361.738 455.112 376.863L446.238 485.985C445.238 499.234 455.112 510.733 468.236 511.733C485.234 513.108 493.358 499.109 494.108 489.734L502.108 389.612C502.733 381.238 506.732 373.488 512.981 368.113L581.724 308.24C597.973 293.865 604.972 271.741 599.973 250.617ZM367.996 255.992H272.006V159.995H367.996V255.992ZM638.219 478.859L584.474 348.114L546.228 381.488L593.723 497.109C598.723 509.233 612.596 515.233 624.97 510.233C637.344 505.234 643.218 491.234 638.219 478.859ZM1.783 478.859C-3.217 491.234 2.658 505.234 14.907 510.233C27.28 515.233 41.279 509.233 46.278 497.109L93.649 381.488L55.403 348.114L1.783 478.859Z" })
  }
));
PeopleCarryBoxRegular.displayName = "PeopleCarryBoxRegular";
var PeopleCarryBox_default = PeopleCarryBoxRegular;
